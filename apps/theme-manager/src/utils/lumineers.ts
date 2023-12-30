// Converts a hex color string to an RGB array
const hex2rgb = (hex: string): Array<number> => {

    // If full 6-digit hex, extract R, G, B values
    if (hex.length === 7) {
      return [
        parseInt(hex.substring(1, 3), 16), 
        parseInt(hex.substring(3, 5), 16),
        parseInt(hex.substring(5, 7), 16),
      ];
  
    // If 3-digit hex shorthand, extract and duplicate R, G, B values
    } else {
      return [
        parseInt(hex.charAt(1), 16),
        parseInt(hex.charAt(1), 16), 
        parseInt(hex.charAt(1), 16),
      ];
    }
  }
  
  // Calculate luminance value for a color 
  const calcLuminance = (c: string): number => {
  
    // RGB luma coefficients
    const r = 0.2126;
    const g = 0.7152; 
    const b = 0.0722;
  
    // Luma threshold for sRGB
    const lumi_srgb_threshold = 0.03928;
  
    // Convert hex to RGB array
    let rgbColor = hex2rgb(c);
  
    // Convert RGB to linearized sRGB
    let rgbl = rgbColor
      .map(v => v / 255.0) 
      .map(v => {
        if (v < lumi_srgb_threshold) {
          return v / 12.92;
        } else {
          return Math.pow(((v + 0.055) / 1.055), 2.4);
        }
      });
    
    // Calculate and return luminance
    return (r*rgbl[0]) + (g*rgbl[1]) + (b*rgbl[2]);
  }
  
  // Calculate contrast ratio between two luminance values
  const calcContrast = (lumi1: number, lumi2: number): number => {
    if (lumi1 > lumi2) {
      return (lumi1 + 0.05) / (lumi2 + 0.05);
    } else {
      return (lumi2 + 0.05) / (lumi1 + 0.05); 
    }
  }
  
  // Get ideal text color (dark vs light) for given background color
  export const getTextColor = (color: string, darkColor="#FFF", lightColor="#000"): string => {
    let bgLumi = calcLuminance(color);
    if (bgLumi > 0.179) {
      return lightColor;
    } else {
      return darkColor;
    }
  }