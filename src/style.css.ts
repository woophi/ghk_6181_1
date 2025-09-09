import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const boxSlide = style({
  display: 'flex',
  padding: '12px 1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#EEEEFB8C',
  width: '152px',
  height: '132px',
});

export const appSt = {
  bottomBtn,
  container,
  boxSlide,
};
