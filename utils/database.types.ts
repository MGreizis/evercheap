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

      products: {
        id: string;
        name: string;
        price: number;
        nutriscore: string;
        store: string;
        Row: any;
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
