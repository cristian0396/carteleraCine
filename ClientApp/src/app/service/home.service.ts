import { Injectable, Inject } from '@angular/core';
import { Detail } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../../../../Models/movie';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    url: string = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getLastestMovie(): Observable<any> {
        return this.http.get<any>(this.url + '/movie/latest?api_key=' + environment.api_key);
    }

    getPopularMovies(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/movie/popular?api_key=' + environment.api_key);
    }

    getNowPlayingMovies(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/movie/now_playing?api_key=' + environment.api_key);
    }

    getTopRatedMovies(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/movie/top_rated?api_key=' + environment.api_key);
    }

    getUpcomingMovies(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/movie/upcoming?api_key=' + environment.api_key);
    }

    getTrendingMovies(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/trending/all/week?api_key=' + environment.api_key);
    }

    getOriginals(): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/discover/tv?api_key=' + environment.api_key);
    }

    //public baseUrl: string;

    //constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //    this.baseUrl = baseUrl;
    //}

    //public GetDetail(): Observable<Detail[]> {       
    //    return this.http.get<Detail[]>(this.baseUrl + "api/Home/Detail");
    //}
}