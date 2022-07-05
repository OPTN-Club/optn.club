export interface ChartDataCornerSpeed {
  high?: string[];
  medToLow?: string[];
  low?: string[];
  all?: string[];
}

export interface ChartDataCorner {
  entry: ChartDataCornerSpeed;
  mid: ChartDataCornerSpeed;
  exit: ChartDataCornerSpeed;
}

export interface ChartData {
  understeer: ChartDataCorner;
  oversteer: ChartDataCorner;
}
