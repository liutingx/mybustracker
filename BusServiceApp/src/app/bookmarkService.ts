import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BookmarkService {

    constructor(private http: HttpClient){}
    BASE_URL = 'https://mybustracker.herokuapp.com'

    removeBookmark(bookmark_id): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.delete<any>(this.BASE_URL+`/bookmarks/${bookmark_id}`, { headers })
        .toPromise()
    }

    getBookmarks(): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.get<any>(this.BASE_URL+`/bookmarks`, { headers })
            .toPromise()
    }

    getOneBookmark(bookmark_id): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.get<any>(this.BASE_URL+`/bookmarks/edit/${bookmark_id}`, { headers })
            .toPromise()
    }

    editBookmark(data): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.put<any>(this.BASE_URL+`/bookmarks`, data, { headers })
            .toPromise()
    }

    getBusStopInfo(): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.get<any>(this.BASE_URL+`/bookmarks/create`, { headers })
            .toPromise()
    }

    createBookmark(data): Promise<any>{
        const userToken = localStorage.getItem('accessToken')
        const headers = (new HttpHeaders())
            .set('Authorization', `Bearer ${userToken}`)
        return this.http.post<any>(this.BASE_URL+`/bookmarks/create`, data, { headers })
            .toPromise()
    }

}