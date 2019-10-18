import { Component, OnInit } from '@angular/core';
import {InstafeedService} from '../../core/services/instafeed/instafeed.service';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.scss'],
})
export class InstafeedComponent implements OnInit {
private insta;
imageZoom: string;
private instagramAPI;
private rowLength;

constructor(private instaFeed: InstafeedService, private loadingController: LoadingController) { }

  async ngOnInit() {

    const loader = await this.loadingController.create({message: 'Loading...'});
    await loader.present();
    // console.log(this.insta.graphql.hashtag.edge_hashtag_to_media.edges[0].node.display_url);
    this.insta = this.instaFeed.getFeed().then(
        insta => {
            if (insta.status === 200) {
                this.insta = insta.data;
                this.instagramAPI = this.insta.graphql.hashtag.edge_hashtag_to_media.edges;
                this.rowLength = Array(
                    Math.trunc(this.insta.graphql.hashtag.edge_hashtag_to_media.edges.length / 3)
                ).fill(0).map((x, i) => i);
            }
        }
    ).finally(() => loader.dismiss());
  }

  addValue(item, valeur) {
    return item + valeur + 2 * item;
  }

  /* Open */
  openNav(imgUrl) {
    console.log('je suis utile');
    document.getElementById('myNav').style.width = '100%';
    this.imageZoom = this.instagramAPI[imgUrl].node.display_url;
  }

  /* Close */
  closeNav() {
    document.getElementById('myNav').style.width = '0%';
  }
}
