export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "admin",
  [UserRole.editor]: "editor",
  [UserRole.guest]: "guest",
};
