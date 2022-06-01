import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainColor: string;
    hoverColor: string;

    $black10: string;
    $black20: string;
    $black30: string;
    $black40: string;
    $black50: string;
    $black60: string;
    $black70: string;
    $black80: string;
    $black90: string;
    $black: string;

    $zindex_Layer: number;
    $zindex_ToolBar: number;
    $zindex_Modal: number;
    $zindex_ModalBackground: number;
    $zindex_Alert: number;
    $zindex_AlertBackground: number;
  }
}
