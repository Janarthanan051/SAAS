export const formatUserName = (name = '') => name.trim() || 'Guest';

export const normalizeAuthMode = (mode) => {
  if (mode === 'login' || mode === 'signup') return mode;
  return 'login';
};

export const buildAvatarUrl = (name, options = {}) => {
  const { background = '54BD95', color = 'fff', size = 80 } = options;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${background}&color=${color}&size=${size}`;
};
