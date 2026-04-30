export function generateId() {
  return Math.random().toString(36).substring(2);
}

export function generateToken() {
  let token = "";
  for (let index = 0; index < 50; index++) {
    token += Math.random().toString(36).substring(2);
  }
  return token;
}