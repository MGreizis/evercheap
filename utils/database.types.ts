interface Profiles {
  id: string /* primary key */;
  updated_at?: string;
  username?: Text;
  firstName?: Text;
  lastName?: Text;
}

export interface Database {
    profiles: Profiles;
}