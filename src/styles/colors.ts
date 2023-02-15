// import { CSSProperties } from "react";

import { concat } from "lodash"
import { CSSProperties } from "react"

export const Colors = {
    primary: 
 "var(--md-sys-color-primary)",
    
    primaryText: 
 "var(--md-sys-color-primary)",
    
    onPrimary: 
 "var(--md-sys-color-on-primary)",
    
    onPrimaryText: 
 "var(--md-sys-color-on-primary)",
    
    primaryContainer: 
 "var(--md-sys-color-primary-container)",
    
    primaryContainerText: 
 "var(--md-sys-color-primary-container)",
    
    onPrimaryContainer: 
 "var(--md-sys-color-on-primary-container)",
    
    onPrimaryContainerText: 
 "var(--md-sys-color-on-primary-container)",
    
    secondary: 
 "var(--md-sys-color-secondary)",
    
    secondaryText: 
 "var(--md-sys-color-secondary)",
    
    onSecondary: 
 "var(--md-sys-color-on-secondary)",
    
    onSecondaryText: 
 "var(--md-sys-color-on-secondary)",
    
    secondaryContainer: 
 "var(--md-sys-color-secondary-container)",
    
    secondaryContainerText: 
 "var(--md-sys-color-secondary-container)",
    
    onSecondaryContainer: 
 "var(--md-sys-color-on-secondary-container)",
    
    onSecondaryContainerText: 
 "var(--md-sys-color-on-secondary-container)",
    
    tertiary: 
 "var(--md-sys-color-tertiary)",
    
    tertiaryText: 
 "var(--md-sys-color-tertiary)",
    
    onTertiary: 
 "var(--md-sys-color-on-tertiary)",
    
    onTertiaryText: 
 "var(--md-sys-color-on-tertiary)",
    
    tertiaryContainer: 
 "var(--md-sys-color-tertiary-container)",
    
    tertiaryContainerText: 
 "var(--md-sys-color-tertiary-container)",
    
    onTertiaryContainer: 
 "var(--md-sys-color-on-tertiary-container)",
    
    onTertiaryContainerText: 
 "var(--md-sys-color-on-tertiary-container)",
    
    error: 
 "var(--md-sys-color-error)",
    
    errorText: 
 "var(--md-sys-color-error)",
    
    errorContainer: 
 "var(--md-sys-color-error-container)",
    
    errorContainerText: 
 "var(--md-sys-color-error-container)",
    
    onError: 
 "var(--md-sys-color-on-error)",
    
    onErrorText: 
 "var(--md-sys-color-on-error)",
    
    onErrorContainer: 
 "var(--md-sys-color-on-error-container)",
    
    onErrorContainerText: 
 "var(--md-sys-color-on-error-container)",
    
    background: 
 "var(--md-sys-color-background)",
    
    backgroundText: 
 "var(--md-sys-color-background)",
    
    onBackground: 
 "var(--md-sys-color-on-background)",
    
    onBackgroundText: 
 "var(--md-sys-color-on-background)",
    
    surface: 
 "var(--md-sys-color-surface)",
    
    surfaceText: 
 "var(--md-sys-color-surface)",
    
    onSurface: 
 "var(--md-sys-color-on-surface)",
    
    onSurfaceText: 
 "var(--md-sys-color-on-surface)",
    
    surfaceVariant: 
 "var(--md-sys-color-surface-variant)",
    
    surfaceVariantText: 
 "var(--md-sys-color-surface-variant)",
    
    onSurfaceVariant: 
 "var(--md-sys-color-on-surface-variant)",
    
    onSurfaceVariantText: 
 "var(--md-sys-color-on-surface-variant)",
    
    outline: 
 "var(--md-sys-color-outline)",
    
    outlineText: 
 "var(--md-sys-color-outline)",
    
    inverseOnSurface: 
 "var(--md-sys-color-inverse-on-surface)",
    
    inverseOnSurfaceText: 
 "var(--md-sys-color-inverse-on-surface)",
    
    inverseSurface: 
 "var(--md-sys-color-inverse-surface)",
    
    inverseSurfaceText: 
 "var(--md-sys-color-inverse-surface)",
    
    inversePrimary: 
 "var(--md-sys-color-inverse-primary)",
    
    inversePrimaryText: 
 "var(--md-sys-color-inverse-primary)",
    
    shadow: 
 "var(--md-sys-color-shadow)",
    
    shadowText: 
 "var(--md-sys-color-shadow)",
    
    surfaceTint: 
 "var(--md-sys-color-surface-tint)",
    
    surfaceTintText: 
 "var(--md-sys-color-surface-tint)",
    
    outlineVariant: 
 "var(--md-sys-color-outline-variant)",
    
    outlineVariantText: 
 "var(--md-sys-color-outline-variant)",
    
    scrim: 
 "var(--md-sys-color-scrim)",
    
    scrimText: 
 "var(--md-sys-color-scrim)",
    
}
// export const Classes = {
//     primary: {
//         backgroundColor: "var(--md-sys-color-primary)",
//     },
//     primaryText: {
//         color: "var(--md-sys-color-primary)",
//     },
//     onPrimary: {
//         backgroundColor: "var(--md-sys-color-on-primary)",
//     },
//     onPrimaryText: {
//         color: "var(--md-sys-color-on-primary)",
//     },
//     primaryContainer: {
//         backgroundColor: "var(--md-sys-color-primary-container)",
//     },
//     primaryContainerText: {
//         color: "var(--md-sys-color-primary-container)",
//     },
//     onPrimaryContainer: {
//         backgroundColor: "var(--md-sys-color-on-primary-container)",
//     },
//     onPrimaryContainerText: {
//         color: "var(--md-sys-color-on-primary-container)",
//     },
//     secondary: {
//         backgroundColor: "var(--md-sys-color-secondary)",
//     },
//     secondaryText: {
//         color: "var(--md-sys-color-secondary)",
//     },
//     onSecondary: {
//         backgroundColor: "var(--md-sys-color-on-secondary)",
//     },
//     onSecondaryText: {
//         color: "var(--md-sys-color-on-secondary)",
//     },
//     secondaryContainer: {
//         backgroundColor: "var(--md-sys-color-secondary-container)",
//     },
//     secondaryContainerText: {
//         color: "var(--md-sys-color-secondary-container)",
//     },
//     onSecondaryContainer: {
//         backgroundColor: "var(--md-sys-color-on-secondary-container)",
//     },
//     onSecondaryContainerText: {
//         color: "var(--md-sys-color-on-secondary-container)",
//     },
//     tertiary: {
//         backgroundColor: "var(--md-sys-color-tertiary)",
//     },
//     tertiaryText: {
//         color: "var(--md-sys-color-tertiary)",
//     },
//     onTertiary: {
//         backgroundColor: "var(--md-sys-color-on-tertiary)",
//     },
//     onTertiaryText: {
//         color: "var(--md-sys-color-on-tertiary)",
//     },
//     tertiaryContainer: {
//         backgroundColor: "var(--md-sys-color-tertiary-container)",
//     },
//     tertiaryContainerText: {
//         color: "var(--md-sys-color-tertiary-container)",
//     },
//     onTertiaryContainer: {
//         backgroundColor: "var(--md-sys-color-on-tertiary-container)",
//     },
//     onTertiaryContainerText: {
//         color: "var(--md-sys-color-on-tertiary-container)",
//     },
//     error: {
//         backgroundColor: "var(--md-sys-color-error)",
//     },
//     errorText: {
//         color: "var(--md-sys-color-error)",
//     },
//     errorContainer: {
//         backgroundColor: "var(--md-sys-color-error-container)",
//     },
//     errorContainerText: {
//         color: "var(--md-sys-color-error-container)",
//     },
//     onError: {
//         backgroundColor: "var(--md-sys-color-on-error)",
//     },
//     onErrorText: {
//         color: "var(--md-sys-color-on-error)",
//     },
//     onErrorContainer: {
//         backgroundColor: "var(--md-sys-color-on-error-container)",
//     },
//     onErrorContainerText: {
//         color: "var(--md-sys-color-on-error-container)",
//     },
//     background: {
//         backgroundColor: "var(--md-sys-color-background)",
//     },
//     backgroundText: {
//         color: "var(--md-sys-color-background)",
//     },
//     onBackground: {
//         backgroundColor: "var(--md-sys-color-on-background)",
//     },
//     onBackgroundText: {
//         color: "var(--md-sys-color-on-background)",
//     },
//     surface: {
//         backgroundColor: "var(--md-sys-color-surface)",
//     },
//     surfaceText: {
//         color: "var(--md-sys-color-surface)",
//     },
//     onSurface: {
//         backgroundColor: "var(--md-sys-color-on-surface)",
//     },
//     onSurfaceText: {
//         color: "var(--md-sys-color-on-surface)",
//     },
//     surfaceVariant: {
//         backgroundColor: "var(--md-sys-color-surface-variant)",
//     },
//     surfaceVariantText: {
//         color: "var(--md-sys-color-surface-variant)",
//     },
//     onSurfaceVariant: {
//         backgroundColor: "var(--md-sys-color-on-surface-variant)",
//     },
//     onSurfaceVariantText: {
//         color: "var(--md-sys-color-on-surface-variant)",
//     },
//     outline: {
//         backgroundColor: "var(--md-sys-color-outline)",
//     },
//     outlineText: {
//         color: "var(--md-sys-color-outline)",
//     },
//     inverseOnSurface: {
//         backgroundColor: "var(--md-sys-color-inverse-on-surface)",
//     },
//     inverseOnSurfaceText: {
//         color: "var(--md-sys-color-inverse-on-surface)",
//     },
//     inverseSurface: {
//         backgroundColor: "var(--md-sys-color-inverse-surface)",
//     },
//     inverseSurfaceText: {
//         color: "var(--md-sys-color-inverse-surface)",
//     },
//     inversePrimary: {
//         backgroundColor: "var(--md-sys-color-inverse-primary)",
//     },
//     inversePrimaryText: {
//         color: "var(--md-sys-color-inverse-primary)",
//     },
//     shadow: {
//         backgroundColor: "var(--md-sys-color-shadow)",
//     },
//     shadowText: {
//         color: "var(--md-sys-color-shadow)",
//     },
//     surfaceTint: {
//         backgroundColor: "var(--md-sys-color-surface-tint)",
//     },
//     surfaceTintText: {
//         color: "var(--md-sys-color-surface-tint)",
//     },
//     outlineVariant: {
//         backgroundColor: "var(--md-sys-color-outline-variant)",
//     },
//     outlineVariantText: {
//         color: "var(--md-sys-color-outline-variant)",
//     },
//     scrim: {
//         backgroundColor: "var(--md-sys-color-scrim)",
//     },
//     scrimText: {
//         color: "var(--md-sys-color-scrim)",
//     },
// }

type CssVariables = {
    [key: string]: string;
};
  
export type Styles = {
    [key: string]: (React.CSSProperties & { vars?: CssVariables })
};
export function createStyle(style: Styles): { [key: string]: React.CSSProperties } {
    return Object.fromEntries(
      Object.entries(style).map(([key, value]) => [
        key,
        { ...value, ...value?.vars, vars: undefined }
      ])
    );
  }
export function combineStyle(style: CSSProperties|CSSProperties[]):CSSProperties {
    const styles =( Array.isArray(style) ? style : [style]) as CSSProperties[]
    return Object.assign({}, ...styles)
}

// import React from 'react';

// type CssVariables = {
//   [key: string]: string;
// };
// export type Styles = {
//   [key: string]: (React.CSSProperties & { vars?: CssVariables }) | undefined;
// };

// export class StyleSheet {
//   public static create(style: Styles): { [key: string]: React.CSSProperties } {
//     return Object.fromEntries(
//       Object.entries(style).map(([key, value]) => [
//         key,
//         { ...value, ...value?.vars, vars: undefined }
//       ])
//     );
//   }
// }
