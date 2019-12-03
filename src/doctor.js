export class Doctor
{
  async getDocName()
  {
    try
    {

    let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?last_name=Varley&location=wa-seattle&skip=0&limit=10&user_key=${process.env.API_KEY}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
    }
    catch (error)
    {
      return "There are no Doctors in your area with that Last Name";
    }
  }
}
