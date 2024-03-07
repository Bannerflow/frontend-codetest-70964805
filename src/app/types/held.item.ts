export interface Item {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}
