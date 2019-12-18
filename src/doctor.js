export class Doctor
{
  async getDocByName(lastName)
  {
    try
    {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${lastName}&location=wa-seattle&skip=0&limit=50&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }
    catch (error)
    {
      return "Sorry, there is an error calling this database.  Please try again";
    }
  }
  async getDocByIssue(issue)
  {
    try
    {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=wa-seattle&skip=0&limit=50&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }
    catch (error)
    {
      return "Sorry, there is an error calling this database.  Please try again";
    }
  }
}
