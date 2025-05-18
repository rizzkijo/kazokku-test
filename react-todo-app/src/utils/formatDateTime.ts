export const formatDateTime = (input: string) => {
  const [datePart, timePart] = input.split(' ');
  const isoString = `${datePart}T${timePart}Z`;

  const date = new Date(isoString);

  const formattedDate = date.toLocaleDateString('en-US', {
    dateStyle: 'short',
    timeZone: 'Asia/Bangkok',
  });

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Bangkok',
  });

  return `${formattedDate} at ${formattedTime}`;
};
