import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class Itemsapi {
  private _http = inject(HttpClient);

  private _apiUrl = "http://localhost:5050";
  // Movie[] - an array of objects type Movie
  // ([]) - Initially empty
  public movies = signal<Movie[]>([]);
  
   // return all Movie from database
  getItems() {
    const url = `${this._apiUrl}/movies`;
    this._http.get<Movie[]>(url)
      .subscribe(data => {
          this.movies.set(data);
      });
  }

  // add one movie
  addItem(myTitle: string, myPlot: string, myYear: string, myPoster:string) {
      const url = `${this._apiUrl}/movies`;
      let movie = {title:myTitle, plot:myPlot, year:myYear, poster:myPoster}
      this._http.post<Movie[]>(url, movie)
      .subscribe(data => {  
          this.getItems();
      });
  }

  // delete car by id
  deleteItem(myId:string) {
    const url = `${this._apiUrl}/movies/${myId}`;
    this._http.delete(url)
    .subscribe(data => { 
      this.getItems();
    });
  }
}
