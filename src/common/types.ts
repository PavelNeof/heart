export type infoType = {
  classes: string[];
  factions: string[];
  locales: string[];
  patch: string;
  qualities: string[];
  races: string[];
  sets: string[];
  standard: string[];
  types: string[];
};

export type ClassesPropType = {
  classes: string[] | undefined;
  setLoading: (loading: boolean) => void;
  setInfoClassesArray: (array: string[]) => void;
  infoClassesArray: string[] | null;
  setDisabledButton: ({}: any) => void;
  disabledButton: any;
};

export type GetClassesInfoType = {
  setInfoClassesArray: (array: string[]) => void;
  infoClassesArray: string[] | null;
  setDisabledButton: ({}: any) => void;
  setLoading: (loading: boolean) => void;
};
