import { format } from 'date-fns';

const formatDate = (isoString) => {
  return format(new Date(isoString), 'yyyy. MM. dd');
};

export default formatDate;
