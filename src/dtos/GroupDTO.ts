export interface GroupDTO {
  group_id: number;
  group: string;
  teams: {
    id: number;
    name: string;
    flag: string;
  }[];
}