import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Movie } from '../../../../Models/movie';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    latestMovie: any;
    popularMovies !: Movie;
    nowPlayingMovies !: Movie;
    topRatedMovies !: Movie;
    upComingMovies !: Movie;
    trendingMovies !: Movie;
    originals !: Movie;

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {
        this.getLatestMovie();
        this.getPopularMovies();
        this.getNowPlayingMovies();
        this.getTopRatedMovie();
        this.getUpcomingMovies();
        this.getTrendingMovies();
        this.getOriginal();
    }

    getLatestMovie() {
        this.homeService.getLastestMovie().subscribe(res => {
            this.latestMovie = this.changeData(res);
            console.log(this.latestMovie);
        }, err => {
            console.log('No se encuentran la ultima peliculas', err);
        })
    }
    changeData(res: any): any {
        if (!res.backdrop_path) {
            res.backdrop_path = 'https://image.tmdb.org/t/p/original' + res.poster_path + '?api_key=' + environment.api_key;
        } else {
            res.backdrop_path = 'https://image.tmdb.org/t/p/original' + res.backdrop_path + '?api_key=' + environment.api_key;
        }

        return res;
    }

    getPopularMovies() {
        this.homeService.getPopularMovies().subscribe(res => {
            this.popularMovies = this.modifyData(res);
            console.log(this.popularMovies);
        }, err => {
            console.log('Error procesando peliculas populares', err);
        })
    }

    getNowPlayingMovies() {
        this.homeService.getNowPlayingMovies().subscribe(res => {
            this.nowPlayingMovies = this.modifyData(res);
        }, err => {
            console.log('Error procesando peliculas en proceso', err);
        })
    }

    getTopRatedMovie() {
        this.homeService.getTopRatedMovies().subscribe(res => {
            this.topRatedMovies = this.modifyData(res);
        }, err => {
            console.log('Error procesando peliculas populares', err);
        })
    }

    getUpcomingMovies() {
        this.homeService.getUpcomingMovies().subscribe(res => {
            this.upComingMovies = this.modifyData(res);
        }, err => {
            console.log('Error procesando peliculas populares', err);
        })
    }

    getTrendingMovies() {
        this.homeService.getTrendingMovies().subscribe(res => {
            this.trendingMovies = this.modifyData(res);
        }, err => {
            console.log('Error procesando peliculas populares', err);
        })
    }

    getOriginal() {
        this.homeService.getOriginals().subscribe(res => {
            this.originals = this.modifyData(res);
        }, err => {
            console.log('Error procesando peliculas populares', err);
        })
    }

    modifyData(movies : Movie) : Movie {
        if (movies.results) {
            movies.results.forEach(element => {
                element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=' + environment.api_key;
                if (!element.title) {
                    //element.title = element?.name;
                }
            });
        }
        return movies;
    }
}


