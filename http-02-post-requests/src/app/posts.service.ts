import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostsService {
    url: string = 'https://global-incline-342322-default-rtdb.firebaseio.com/posts.json'; 
    constructor(private http: HttpClient){}
    createAndStorePost(title: string, content: string) {
        //send http request
        //strong typed return type as well which is a string
        const postData: Post = {title: title, content: content};
        this.http.post<{ name: string }>('https://global-incline-342322-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
            responseData => {
                console.log(responseData);
            }
        );
    }

    fetchPosts() {
        //[key: string] we don't know exact name but there's in id and value is a post object
    //strong types/lets angular know what to expect as the response data
    //get is a generic so can put in reponse type there too
    return this.http.get<{ [key: string]: Post }>('https://global-incline-342322-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postArray: Post [] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key], id: key});
        }
      }
      return postArray;
    }));
    }

    deletePosts(){
        //returns observable
        return this.http.delete(this.url);
    }
}