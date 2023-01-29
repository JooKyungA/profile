import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Detail() {
	return (
		<section className='detail'>
			<div className='inner'>
				<div className='left'>
					<ul>
						<h2>COVER LETTER</h2>
						<li>
							<a href='https://drive.google.com/file/d/1Fu7o38q68vz7TpXVnyaqKzXgzTP7T-Np/view?usp=share_link'>
								PDF
							</a>
						</li>
					</ul>
					<ul className='contact'>
						<h2>CONTACT</h2>
						<li>
							<span>
								<FontAwesomeIcon icon={faMobileAlt} />
							</span>
							010-5198-2861
						</li>
						<li>
							<span>
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							jooka95@naver.com
						</li>
						<li>
							<span>
								<FontAwesomeIcon icon={faGithub} />
							</span>
							<a href='https://github.com/JooKyungA'>https://github.com/JooKyungA</a>
						</li>
					</ul>
					<ul className='certification'>
						<h2>CERTIFICATION</h2>
						<li>정보처리기사 (2021.11.26)</li>
						<li>SQLD (2022.04.08)</li>
					</ul>
					<ul className='skills'>
						<h2>SKILLS</h2>
						<li>HTML</li>
						<li>SCSS</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
				</div>
				<div className='right'>
					<ul>
						<h2>PORTFOLIO</h2>
						<li>
							<div>
								<h3>HTML 홈페이지</h3>
								<a href='https://jookyunga.github.io/Architect_HTML/' target='_blank'>
									Portfolio
								</a>
								<a href='https://github.com/JooKyungA/Architect_HTML' target='_blank'>
									Repository
								</a>
								<a
									href='https://drive.google.com/file/d/1yL1so_jmnH3qg8eIeWCKJhyNne70ipxV/view?usp=share_link'
									target='_blank'
								>
									Guide
								</a>
							</div>
							<p>
								<strong>Skill</strong> : HTML | SCSS | JavaScript
							</p>
							<p>- HTML,SCSS,JavaScript를 활용하여 홈페이지 제작하였습니다. </p>
							<p>
								- 메인페이지와 기업소개, 갤러리, 유튜브, 게시판, 지도, 회원가입 서브페이지로
								구성되어 있습니다.
							</p>
							<p>- Youtube, Flickr, Kakao map API를 호출하여 데이터를 활용했습니다.</p>
						</li>
						<li>
							<div>
								<h3>React 홈페이지</h3>
								<a href='https://jookyunga.github.io/react1103/' target='_blank'>
									Portfolio
								</a>
								<a href='https://github.com/JooKyungA/react1103' target='_blank'>
									Repository
								</a>
								<a
									href='https://drive.google.com/file/d/1UjWg6NdoEV7p1hJetn4qL0lEG2OnSHOk/view?usp=share_link'
									target='_blank'
								>
									Guide
								</a>
							</div>
							<p>
								<strong>Skill</strong> : React | Redux-Toolkit | SCSS | JavaScript
							</p>
							<p>- 기존에 HTML로 작성된 코드를 React로 변환하는 작업을 했습니다.</p>
							<p>- Redux-Toolkit을 활용하여 Youtube와 Flickr 데이터를 상태관리하였습니다.</p>
							<p>- local storage에 저장된 데이터를 활용하여 CRUD 게시판을 구현했습니다.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Detail;
