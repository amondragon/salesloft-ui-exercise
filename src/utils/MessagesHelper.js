import data from "./emails.json";

export const parseMessages = () => {
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
