import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http:HttpClient) {

   }
  hoteles() {return this.http.get<any[]>('https://localhost:32778/api/Hotel')}
  hoteleId(id: number) {return this.http.get<any[]>('https://localhost:32778/api/Hotel/'+id)}
  hotelesPost(nombre: string, direccion: string, mail: string, telefono: string){
    // Define your request data as an object
    const requestData = {
      email: mail,
      phone: telefono
    };
    // Define an interface for the response data
    interface ApiResponse {
      id: number;
      email: string;
      phone: string;
    }
    // Convert the request data to a JSON string
    const requestDataJson = JSON.stringify(requestData);
    // Set the request headers to specify JSON content
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // Define a variable to store the ID
    let savedId: number=0;
    // Make the POST request
    this.http.post<ApiResponse>('https://localhost:32778/api/Contacto', requestDataJson, { headers, responseType: 'json'})
    .subscribe((response)=>{
      // Handle the response here, which is already parsed as JSON
      console.log(response);
      // Extract the 'id' property from the response and store it in the 'savedId' variable
      savedId = response.id;
    }, (error)=>{
      console.log('error');
    });
    
    // Define your request data for Hotel as an object
    const requestDataHotel = {
      nombre: nombre,
      direccion: direccion,
      idContacto: savedId
    };
    // Convert the data to JSON
    const requesDataJsonHotel = JSON.stringify(requestDataHotel);

    // Make the second POST request to create the related record
    this.http.post('https://localhost:32778/api/OtherTable', requesDataJsonHotel, { headers, responseType: 'json' })
    .subscribe((response) => {
      // Handle the response for the second table
      console.log(response);
    }, (error) => {
      // Handle any errors
      console.error(error);
    });
  }
}
