let lenisInstance = null;

// Lets any component (scroll-to-top button, route-change reset, etc.)
// drive the same smooth-scroll instance instead of fighting it with raw window.scrollTo.
export const setLenis = (instance) => {
  lenisInstance = instance;
};

export const getLenis = () => lenisInstance;
