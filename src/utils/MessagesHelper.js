import data from "./emails.json";

export const getMessages = () => {
  return data.messages.map((message) => {
    return {
      ...message,
      selected: false,
      formatedDate: new Date(message.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
  });
};

export const searchMessages = (search, messages) => {
  return messages.filter(
    (message) =>
      message.subject.toLowerCase().includes(search.toLowerCase()) ||
      message.sender.toLowerCase().includes(search.toLowerCase())
  );
};

export const filterMessagesByTag = (tag, messages) => {
  return messages.filter((message) => message.tags.includes(tag));
};
