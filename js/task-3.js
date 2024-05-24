function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}
