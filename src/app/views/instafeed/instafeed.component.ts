import {Component, OnInit} from '@angular/core';
import {InstafeedService} from '../../core/services/instafeed/instafeed.service';
import {LoadingController} from '@ionic/angular';
import {MessageService} from '../../core/services/message/message.service';


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

    constructor(private instaFeed: InstafeedService,
                private loadingController: LoadingController,
                private messageService: MessageService) {
    }

    async ngOnInit() {
        this.getInstaFeed();
        this.messageService.listen().subscribe(
            msg => {
                if (msg === 'reload instagram') {
                    this.getInstaFeed();
                }
            }
        );
    }

    async getInstaFeed() {
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
        ).catch(e => console.log(e)).finally(() => loader.dismiss());
    }

    addValue(item, valeur) {
        return item + valeur + 2 * item;
    }

    openNav(imgUrl) {
        document.getElementById('myNav').style.width = '100%';
        this.imageZoom = this.instagramAPI[imgUrl].node.display_url;
    }

    closeNav() {
        document.getElementById('myNav').style.width = '0%';
    }
}
