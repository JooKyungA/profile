import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMobileAlt,
	faEnvelope,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import pf_img from '../img/pic1.png';

function Detail() {
	return (
		<section className='detail'>
			<div className='inner'>
				<div className='left'>
					<ul className='contact'>
						<h2>CONTACT</h2>
						<li>
							<p>
								<FontAwesomeIcon icon={faMobileAlt} /> PHONE
							</p>
							010-5198-2861
						</li>
						<li>
							<p>
								<FontAwesomeIcon icon={faEnvelope} /> EMAIL
							</p>
							jooka95@naver.com
						</li>
						<li>
							<p>
								<FontAwesomeIcon icon={faGithub} /> GITHUB
							</p>
							<a href='https://github.com/JooKyungA'>https://github.com/JooKyungA</a>
						</li>
					</ul>
					<ul className='skills'>
						<h2>SKILLS</h2>
						<li>HTML</li>
						<li>SCSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node.js</li>
						<li>Mongo DB</li>
						<li>Styled-Components</li>
					</ul>
				</div>
				<div className='right'>
					<ul>
						<h2>PORTFOLIO</h2>
						<div className='pic'>
							<img src={pf_img} alt='' />
						</div>
						<li>
							<div>
								<a href='https://jookyunga.github.io/Architect_HTML/' target='_blank'>
									HTML <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								</a>
							</div>
							<p>
								<strong>Skill</strong> : HTML | SCSS | JavaScript
							</p>
							<p>HTML,SCSS,JavaScript를 활용하여 홈페이지 제작하였습니다. </p>
							<p>
								메인페이지와 기업소개, 갤러리, 유튜브, 게시판, 지도, 회원가입 서브페이지로 구성되어
								있습니다.
							</p>
							<p>Youtube, Flickr, Kakao map API를 호출하여 데이터를 활용했습니다.</p>
						</li>
						<li>
							<div>
								<a href='https://jookyunga.github.io/react1103/' target='_blank'>
									React <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								</a>
							</div>
							<p>
								<strong>Skill</strong> : React | Redux-Toolkit | SCSS | JavaScript
							</p>
							<p>기존에 HTML로 작성된 코드를 React로 변환하는 작업을 했습니다.</p>
							<p>Redux-Toolkit을 활용하여 Youtube와 Flickr 데이터를 상태관리하였습니다.</p>
							<p>local storage에 저장된 데이터를 활용하여 CRUD 게시판을 구현했습니다.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Detail;
