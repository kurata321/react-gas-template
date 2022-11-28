export const doGet = (e: GoogleAppsScript.Events.DoGet) => {
  console.log(e)
  return HtmlService.createTemplateFromFile('app').evaluate()
};

export const hello = () => {
  return 'response'
}
