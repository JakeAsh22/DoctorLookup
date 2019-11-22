export class Doctor
{
  async getDocName()
  {
    let response = await fetch ('https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&user_key=99c49e507ab58e761efd1622ee667e9f
')
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}
