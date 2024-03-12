export interface Move {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
}

export interface MoveItem {
  move: Move;
  version_group_details: VersionGroupDetail[];
  slot: boolean;
}
