// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

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
