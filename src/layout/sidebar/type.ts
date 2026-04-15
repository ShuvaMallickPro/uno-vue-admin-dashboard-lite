export interface ChildNavItem {
  label: string;
  route: string;
  isPro?: boolean;
}

export interface NavItem {
  icon: string;
  route: string;
  label: string;
  isPro?: boolean;
  children?: ChildNavItem[];
}
