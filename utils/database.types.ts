export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];
export interface Database {
  public: {
    Tables: {
      profiles: {
        id: string;
        firstName: string;
        lastName: string;
        username: string;
        Row: any;
      };

      Views: {
        [_ in never]: never;
      };
      Functions: {
        [_ in never]: never;
      };

      Enums: {
        [_ in never]: never;
      };
    };
  };
}
