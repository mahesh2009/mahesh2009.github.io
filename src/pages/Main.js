import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import protestSi from "./img/protest-si.png";
import protestEn from "./img/protest-en.png";
import protestTm from "./img/protest-tm.png";
import raisedHand from "./img/raised-hand.jpeg"
import or from "./img/or.png";
import { Timeline } from 'react-twitter-widgets';
import Stories from 'react-insta-stories'

const Main = () => {

	return (
		<div>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
			<div className="main-body">
				<div className="main-title-container">
					<img class="img" src={protestSi}></img>
					<img class="img" src={protestEn}></img>
					<img class="img" src={protestTm}></img>
				</div>
				<div className="main-btn-container">
					<a className="main-btn" href="/login">
						<img class="img" src={raisedHand} width="120" height="80"></img><br/>
						Log in &nbsp; &nbsp; &nbsp; 
					</a>
					<a href="/registration" className="main-btn">
						Register
					</a>
					<a href="https://protests.watchdog.team/heatmap" className="main-btn">
						Protest Heat Map
					</a>
				</div>

				
			</div>
			
			<Stories 
					stories={[{ url: 'https://cdn.newsfirst.lk/english-uploads/2022/04/762eb327-whatsapp-image-2022-04-09-at-4.12.40-pm.jpeg',  header: { heading: '#Gall face protest', subheading: 'Posted 5h ago', profileImage: 'https://www.dailynews.lk/sites/default/files/news/2019/10/11/z_p-10-gallle-face.jpg' } }, 
					{ url: 'https://i2.wp.com/nasheman.in/wp-content/uploads/2018/09/SRI_LANKA_HUMAN_RIGHTS.jpg', header: { heading: '#1,000+ unions goes on strike', subheading: 'Posted 32m ago', profileImage: 'https://www.asianews.it/files/img/SRI_LANKA_-_0521_-_Proteste_1.jpg' } }, 
					{ url: 'https://www.newscutter.lk/wp-content/uploads/2022/04/F1A222D4-9D88-437B-87F8-EB817801D2B2.jpeg', header: { heading: '#Major cities joins Galle Face occupants from Jaffna to Matara', subheading: 'Posted 32m ago', profileImage: 'https://cdn.bignewsnetwork.com/ani1650075279.jpg' } }, 
					{ url: 'https://media.npr.org/assets/img/2022/04/06/ap22095409593951-ca77db4cc69871b1ae3166ddd86dbb9bde55cc57-s1600-c85.webp', header: { heading: '#Religious leaders joins the protest against government', subheading: 'Posted 32m ago', profileImage: 'https://cdn.bignewsnetwork.com/ani1650075279.jpg' }}, 
					{ url: 'https://cdn.newsfirst.lk/english-uploads/2021/06/a5127e04-farmer-protest.jpg', header: { heading: '#Farmers demands for fertilizers, high living and material costs', subheading: 'Posted 32m ago', profileImage: 'https://cdn.bignewsnetwork.com/ani1650075279.jpg' } }, 
					{ url: 'https://video.twimg.com/ext_tw_video/1519582995086143488/pu/vid/490x270/ZNUL3fiNQvPqilPz.mp4?tag=12', type: 'video' }, 'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202204/gfx_1-x1280.jpeg?UEf5C4yZeA6CbKvpcWytNGkvFh5ObDeX']
				}
					defaultInterval={1500}
					width={432}
					height={768}
					/>

			<Timeline
				dataSource={{
					sourceType: 'profile',
					screenName: 'elearnerlk'
				}}
				options={{
					height: '400'
				}}
				/>
				<p className="text">
				<h1 className="title">
					About Safe Protests <br/>
					<i class="material-icons md-48">code</i>
				</h1>
					Safe Protests is a web app created by Carol, Rahul, Sunny and Umar for
					Set.Hacks() 2020.{" "}
				<p style={{paddingBottom: "50px"}}>
					From the womens' suffrage movement to Martin Luther King Jr.'s rallies,
					citizens has always relied on protests and public demonstrations to make
					change happen. With recent events in mind, it is becoming apparent that
					protesters need a way to protect themselves and stay informed during the
					middle of a protest or strike. Safe Protests is an app for organizing
					and staying safe during protests, providing live updates from protest
					organizers, information about protester rights, marking dangerous
					locations on a live-updated map, and the ability to notify contacts with
					a participant's last location if something goes wrong.
					
				</p>
			</p>
		</div>
	);
};

export default Main;
