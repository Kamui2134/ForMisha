;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405],
	{
		5557: function (t, e, _) {
			;(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return _(5632)
				},
			])
		},
		5632: function (t, e, _) {
			'use strict'
			_.r(e),
				_.d(e, {
					default: function () {
						return mt
					},
				})
			var o = _(5893),
				n = _(7294),
				s = _(9008),
				a = _.n(s),
				r = function () {
					return (0, o.jsxs)('div', {
						className: 'cLoader isLoading',
						children: [
							(0, o.jsxs)('div', {
								className: 'cLoader__content',
								children: [
									(0, o.jsx)('div', { className: 'cLoader__item' }),
									(0, o.jsx)('div', { className: 'cLoader__item' }),
								],
							}),
							(0, o.jsx)('button', {
								type: 'button',
								id: 'submit-button',
								className: 'invisible',
							}),
						],
					})
				},
				l = _(1131),
				i = _.n(l),
				u = _(5897),
				c = _.n(u),
				d = _(4520),
				p = _.n(d),
				b = {
					https: 'https://',
					mDom: '',
					tDom: '#',
					rootDomain: '#',
					otpUrl: '#',
					registerLink: '#',
					termsLink: '#',
					loginLink: '#',
					offersLink: '#',
					year: new Date().getFullYear(),
					appsLink: '#',
					instagramLink: '#',
					twitterLink: '#',
					facebookLink: '#',
					telegramLink: '#',
					privacyPolicy: '#',
					responsibleGambling: '#',
					licenseFederbet: '#',
					licenseGamblingTherapy: '#',
					licenseCuracao: '#',
					nnbonus: '30',
					landing_type: 'casino',
				},
				m = b,
				R = function () {
					return (0, o.jsxs)('header', {
						className: c().header,
						children: [
							(0, o.jsx)('a', {
								className: c().header__logo,
								href: m.registerLink,
								'data-cs': 'cs-header-logo',
								children: (0, o.jsx)('img', { src: p(), alt: 'Casino logo' }),
							}),
						],
					})
				},
				A = _(4924),
				w = _(3967),
				f = _.n(w),
				g = _(5741),
				h = _.n(g),
				M = JSON.parse(
					'{"1":{"text":"rood","number":"7"},"2":{"text":"zwart","number":"10"},"3":{"text":"nul","number":"0"}}'
				),
				N = function (t) {
					var e,
						_ = t.color,
						s = t.setColor,
						a = t.setNumber,
						r = t.setFocusedBoardButton,
						l = t.isAnimated,
						i = (0, n.useState)(!1),
						u = i[0],
						c = i[1],
						d = (0, n.useState)(''),
						p = d[0],
						b = d[1]
					return (
						(0, n.useEffect)(
							function () {
								b(_)
							},
							[_]
						),
						(0, o.jsxs)('div', {
							className: h().buttons,
							children: [
								(0, o.jsx)('button', {
									className: f()(
										((e = {}),
										(0, A.Z)(e, h().buttons__choice, !0),
										(0, A.Z)(e, h().buttons__choice__transparent, p),
										(0, A.Z)(e, h().buttons__choice__animation, l),
										e)
									),
									onClick: function () {
										c(!0),
											setTimeout(function () {
												c(!1)
											}, 2500)
									},
									children: 'Maak uw keuze en draai',
								}),
								(0, o.jsx)('div', {
									children: Object.keys(M).map(function (t, e) {
										var n
										return (0, o.jsx)(
											'button',
											{
												className: f()(
													((n = {}),
													(0, A.Z)(n, h().buttons__button, !0),
													(0, A.Z)(n, h().buttons__button__animation, u),
													(0, A.Z)(n, h().focused, M[t].text === p),
													n)
												),
												onClick: function () {
													return (function (t) {
														r(''),
															a(M[t].number),
															b(M[t].text),
															M[t].text !== _ && s(M[t].text)
													})(t)
												},
												'data-cs': 'cs-cta-button',
												children: M[t].text,
											},
											e
										)
									}),
								}),
							],
						})
					)
				},
				x = _(1189),
				j = _.n(x),
				C = _(1173),
				v = _.n(C),
				y = function (t) {
					var e,
						_ = t.isTransformed,
						n = t.setIsTransformed
					return (0, o.jsx)('button', {
						className: f()(
							((e = {}),
							(0, A.Z)(e, j().arrowButton, !0),
							(0, A.Z)(e, j().arrowButton__left, _),
							e)
						),
						onClick: function () {
							n(!_)
						},
						'data-cs': 'cs-cta-button',
						children: (0, o.jsx)('img', { src: v(), alt: '' }),
					})
				},
				E = _(3567),
				D = _.n(E),
				I = _(2676),
				T = _.n(I),
				B = _(3414),
				S = _.n(B),
				k = JSON.parse(
					'{"1":{"color":"red"},"2":{"color":"black"},"3":{"color":"red"},"4":{"color":"black"},"5":{"color":"red"},"6":{"color":"black"},"7":{"color":"red"},"8":{"color":"black"},"9":{"color":"red"},"10":{"color":"black"},"11":{"color":"black"},"12":{"color":"red"},"13":{"color":"black"},"14":{"color":"red"},"15":{"color":"black"},"16":{"color":"red"},"17":{"color":"black"},"18":{"color":"red"},"19":{"color":"red"},"20":{"color":"black"},"21":{"color":"red"},"22":{"color":"black"},"23":{"color":"red"},"24":{"color":"black"},"25":{"color":"red"},"26":{"color":"black"},"27":{"color":"red"},"28":{"color":"black"},"29":{"color":"black"},"30":{"color":"red"},"31":{"color":"black"},"32":{"color":"red","rouletteNumber":1},"33":{"color":"black"},"34":{"color":"red"},"35":{"color":"black"},"36":{"color":"red"}}'
				),
				L = 'IN',
				O = 'en',
				z = '3',
				Q = 'casino',
				P = 'cta',
				H = function (t) {
					var e,
						_,
						s = t.openModal,
						a = (0, n.useState)(!1),
						r = a[0],
						l = a[1],
						i = (0, n.useState)(),
						u = i[0],
						c = i[1],
						d = (0, n.useState)(),
						p = d[0],
						b = d[1],
						m = (0, n.useState)(''),
						R = m[0],
						w = m[1],
						g = (0, n.useState)(0),
						h = g[0],
						M = g[1],
						x = (0, n.useState)(0),
						j = x[0],
						C = x[1],
						v = (0, n.useState)(!1),
						E = v[0],
						I = v[1],
						B = (0, n.useState)(!1),
						L = B[0],
						O = B[1]
					return (0, o.jsxs)('div', {
						className: D().roulette,
						children: [
							(0, o.jsx)(N, {
								color: p,
								setColor: b,
								setNumber: c,
								spinerStatus: h,
								setFocusedBoardButton: w,
								isAnimated: E,
							}),
							(0, o.jsxs)('div', {
								className: D().roulette__wrapper,
								children: [
									(0, o.jsx)('img', {
										src: T(),
										alt: 'Casino roulette',
										className: D().roulette__circle,
									}),
									(0, o.jsx)('div', {
										className: f()(
											D()['roulette__ball-container'],
											D()['status-'.concat(h, '__').concat(u)],
											D()['rotate'.concat(j, '__').concat(u)]
										),
										children: (0, o.jsx)('img', {
											src: S(),
											alt: '',
											className: f()(
												D().roulette__ball,
												D()['roulette__ball__'.concat(h)]
											),
										}),
									}),
									(0, o.jsx)('button', {
										className: f()(
											D()['roulette__spin-button'],
											D()['roulette__spin-button--'.concat(p ? 'animated' : '')]
										),
										onClick: function () {
											3 !== h &&
												(u ||
													(I(!0),
													setTimeout(function () {
														I(!1)
													}, 1e3)),
												u &&
													(O(!0),
													M(function (t) {
														return t + 1
													}),
													I(!1),
													setTimeout(function () {
														C(function (t) {
															return t + 1
														}),
															M(function (t) {
																var e = t + 1
																return (
																	(function (t) {
																		var e = ''
																		switch (t) {
																			case 2:
																				e = 'loser'
																				break
																			case 4:
																				e = 'winner'
																				break
																			default:
																				e = ''
																		}
																		setTimeout(function () {
																			s(e)
																		}, 1e3)
																	})(e),
																	e
																)
															})
													}, 4500),
													setTimeout(function () {
														C(function (t) {
															return t + 1
														}),
															O(!1)
													}, 6e3)))
										},
										disabled: L,
										'data-cs': 'cs-cta-button',
										children: 'Spin',
									}),
									(0, o.jsxs)('div', {
										className: f()(
											((e = {}),
											(0, A.Z)(e, D().roulette__board, !0),
											(0, A.Z)(e, D().roulette__board__transform, r),
											e)
										),
										children: [
											(0, o.jsx)('button', {
												className: f()(
													((_ = {}),
													(0, A.Z)(_, D().roulette__board__zero, !0),
													(0, A.Z)(_, D().focused, '0' === R),
													(0, A.Z)(_, D().hover, !h),
													_)
												),
												onClick: function () {
													window.Analytics &&
														window.Analytics.pushEvent({
															pushEventName: 'landing_cta_buttons_click',
															bonusType: z,
															ctaButtonType: P,
														}),
														c('0'),
														b('zero'),
														w('0')
												},
												children: '0',
											}),
											Object.keys(k).map(function (t) {
												var e
												return (0, o.jsx)(
													'button',
													{
														className: f()(
															((e = {}),
															(0, A.Z)(e, D().roulette__board__button, !0),
															(0, A.Z)(e, D().focused, R === t),
															e),
															D()[
																'roulette__board__button__'.concat(k[t].color)
															],
															D()['roulette__board__button__'.concat(t)]
														),
														onClick: function () {
															return (function (t) {
																window.Analytics &&
																	window.Analytics.pushEvent({
																		pushEventName: 'landing_cta_buttons_click',
																		bonusType: z,
																		ctaButtonType: P,
																	}),
																	c(t),
																	b(k[t].color),
																	w(t)
															})(t)
														},
														children: t,
													},
													t
												)
											}),
											(0, o.jsx)(y, { setIsTransformed: l, isTransformed: r }),
										],
									}),
								],
							}),
						],
					})
				},
				U = _(6058),
				G = _.n(U)
			function F(t) {
				var e,
					_ = t.modalStatus,
					s = t.link,
					a = (0, n.useState)(!0),
					r = a[0],
					l = a[1],
					i = f()(
						((e = {}),
						(0, A.Z)(e, G().modal__wrapper, !0),
						(0, A.Z)(e, G().hidden, r),
						(0, A.Z)(e, G().visible, !r),
						e)
					)
				return (
					(0, n.useEffect)(
						function () {
							l('winner' !== _)
						},
						[_]
					),
					(0, o.jsx)('div', {
						className: i,
						children: (0, o.jsxs)('div', {
							className: G().modal,
							children: [
								(0, o.jsx)('h3', {
									className: f()(G().modal__title, G().yellow),
									children: 'Gefeliciteerd!',
								}),
								(0, o.jsxs)('p', {
									className: G().modal__description,
									children: [
										'UW TOTALE WINST IS:',
										(0, o.jsx)('span', {
											className: G().yellow,
											children: '€450',
										}),
										' + 250 Gratis Spins!',
									],
								}),
								(0, o.jsx)('div', {
									className: G()['modal__video-container'],
									children: (0, o.jsx)('video', {
										width: '170',
										height: '100',
										poster: '#',
										children: (0, o.jsx)('source', {
											src: '#',
											type: 'video/mp4',
										}),
									}),
								}),
								(0, o.jsx)('a', {
									className: G()['modal__btn-main'],
									id: 'submit-button',
									href: 'https://lukyday.xyz/click',
									'data-cs': 'cs-button-signup',
									children: (0, o.jsx)('span', {
										children: 'CLAIM NOW',
									}),
								}),
							],
						}),
					})
				)
			}
			var V = _(8362),
				Z = _.n(V)
			function W(t) {
				var e,
					_ = t.modalStatus,
					s = t.closeModal,
					a = (0, n.useState)(!0),
					r = a[0],
					l = a[1],
					i = f()(
						((e = {}),
						(0, A.Z)(e, G().modal__wrapper, !0),
						(0, A.Z)(e, G().hidden, r),
						(0, A.Z)(e, G().visible, !r),
						e)
					)
				return (
					(0, n.useEffect)(
						function () {
							l('loser' !== _)
						},
						[_]
					),
					(0, o.jsx)('div', {
						className: i,
						onClick: function (t) {
							var e = document.querySelector('.modal__wrapper')
							t.target === e && s()
						},
						children: (0, o.jsxs)('div', {
							className: G().modal,
							children: [
								(0, o.jsx)('button', {
									className: G()['modal__btn-close'],
									onClick: s,
									children: (0, o.jsx)('img', {
										src: Z(),
										alt: 'close button',
									}),
								}),
								(0, o.jsx)('h3', {
									className: f()(G().modal__title, G()['modal__title--loser']),
									children: 'Sorry, maar je hebt het gemist',
								}),
								(0, o.jsx)('p', {
									className: f()(G().modal__description, G().yellow),
									children: 'Maak je geen zorgen, beproef je geluk opnieuw',
								}),
								(0, o.jsx)('div', {
									className: G()['modal__video-container'],
									children: (0, o.jsx)('video', {
										width: '170',
										height: '100',
										poster: '#',
										children: (0, o.jsx)('source', {
											src: '#',
											type: 'video/mp4',
										}),
									}),
								}),
								(0, o.jsx)('button', {
									className: G()['modal__btn-main'],
									onClick: s,
									children: (0, o.jsx)('span', { children: 'Weer Draaien' }),
								}),
							],
						}),
					})
				)
			}
			var Y = _(565),
				q = _.n(Y),
				J = function () {
					var t = (0, n.useState)(''),
						e = t[0],
						_ = t[1]
					return (0, o.jsxs)('main', {
						className: q().main,
						children: [
							(0, o.jsx)('div', {
								className: q().main__question,
								children: (0, o.jsx)('p', {
									children: 'Wil je spelen om rijk te worden?',
								}),
							}),
							(0, o.jsx)('div', {
								className: q().main__title,
								children: (0, o.jsxs)('h1', {
									children: [
										'Draai aan de roulette',
										(0, o.jsx)('br', {}),
										(0, o.jsx)('span', { children: 'en prijzen winnen' }),
									],
								}),
							}),
							(0, o.jsx)(H, {
								openModal: function (t) {
									_(t),
										(document.querySelector('body').style.overflow = 'hidden')
								},
							}),
							(0, o.jsxs)('a', {
								className: q().main__terms,
								href: b.termsLink,
								'data-cs': 'cs-reg-bonus-rules',
								children: [
									'Algemene',
									' ',
									(0, o.jsx)('span', {}),
									' ',
									'Voorwaarden',
								],
							}),
							(0, o.jsx)(F, { link: b.registerLink, modalStatus: e }),
							(0, o.jsx)(W, {
								modalStatus: e,
								closeModal: function () {
									window.Analytics &&
										window.Analytics.pushEvent({
											pushEventName: 'landing_cta_buttons_click',
											bonusType: z,
											ctaButtonType: P,
										}),
										_(''),
										(document.querySelector('body').style.overflow = 'auto')
								},
							}),
						],
					})
				},
				X = _(2836),
				K = _.n(X),
				$ = _(3978),
				tt = _.n($),
				et = _(1703),
				_t = _.n(et),
				ot = _(1475),
				nt = _.n(ot),
				st = _(5512),
				at = _.n(st),
				rt = _(6714),
				lt = _.n(rt),
				it = _(320),
				ut = _.n(it),
				ct = _(6685),
				dt = _.n(ct)
			var bt = function () {
				return (
					(0, n.useEffect)(function () {
						!(function () {
							const redirectLinkHref = 'https://lukyday.xyz/click' // Редирект
							if (window.Analytics && !window.location.hash) {
								document.querySelectorAll('a').forEach(function (e) {
									if (!e.href.includes(redirectLinkHref)) {
										e.href += redirectLinkHref
									}
								})
							}
						})()
						'complete' === document.readyState ||
						'interactive' === document.readyState
							? setTimeout(function () {
									'undefined' !== typeof MTFEF &&
										'undefined' !== typeof MTFEF.init &&
										MTFEF.init()
							  }, 10)
							: document.addEventListener('DOMContentLoaded', function () {
									'undefined' !== typeof MTFEF &&
										'undefined' !== typeof MTFEF.init &&
										MTFEF.init()
							  })
					}, []),
					(0, n.useEffect)(function () {
						setTimeout(function () {
							var t = window.innerWidth >= 1e3 ? 'DESKTOP_AIR_PM' : 'MOBILE_WEB'
							window.Analytics &&
								(window.Analytics.addGlobalContext(L, O, t),
								window.Analytics.addContextLanding(z, Q),
								window.Analytics.pageViewEvent(),
								(function () {
									var t = {
										csHeaderLogo: document.querySelector(
											'[data-cs="cs-header-logo"]'
										),
										csButtonSignup: document.querySelectorAll(
											'[data-cs="cs-button-signup"]'
										),
										mainCtaButton: document.querySelectorAll(
											'[data-cs="cs-cta-button"]'
										),
										csRegIsPlayerAgree: document.querySelector(
											'[data-cs="cs-reg-isplayeragree"]'
										),
										csRegBonusActivate: document.querySelector(
											'[data-cs="cs-reg-bonus-activate"]'
										),
										csRegBonusRules: document.querySelector(
											'[data-cs="cs-reg-bonus-rules"]'
										),
										csGooglePlayDownload: document.querySelector(
											'[data-cs="cs-google-play-download"]'
										),
										csAppStoreDownload: document.querySelector(
											'[data-cs="cs-app-store-download"]'
										),
										csTerms: document.querySelector('[data-cs="cs-terms"]'),
										csRegformPhoneFocus: document.querySelector(
											'[data-cs="cs-regform-phone-focus"]'
										),
										csLoginBtn: document.querySelector(
											'[data-cs="cs-login-btn"]'
										),
									}
									null !== t.csHeaderLogo &&
										t.csHeaderLogo.addEventListener('click', function () {
											return window.Analytics.pushEvent({
												pushEventName: 'landing_registration_logo_click',
											})
										}),
										null !== t.csButtonSignup &&
											t.csButtonSignup.forEach(function (t) {
												t.addEventListener('click', function () {
													window.Analytics.pushEvent({
														pushEventName:
															'landing_registration_product_redirect_click',
														bonusType: z,
													})
												})
											}),
										null !== t.mainCtaButton &&
											t.mainCtaButton.forEach(function (t) {
												t.addEventListener('click', function () {
													window.Analytics.pushEvent({
														pushEventName: 'landing_cta_buttons_click',
														bonusType: z,
														ctaButtonType: P,
													})
												})
											}),
										null !== t.csRegIsPlayerAgree &&
											t.csRegIsPlayerAgree.addEventListener(
												'click',
												function () {
													window.Analytics.pushEvent({
														pushEventName:
															'landing_field_agreement_toggle_click',
													})
												}
											),
										null !== t.csRegBonusActivate &&
											t.csRegBonusActivate.addEventListener(
												'click',
												function () {
													window.Analytics.pushEvent({
														pushEventName: 'landing_field_bonus_toggle_click',
													})
												}
											),
										null !== t.csRegBonusRules &&
											t.csRegBonusRules.addEventListener('click', function () {
												window.Analytics.pushEvent({
													pushEventName: 'landing_bonus_rules_click',
												})
											}),
										null !== t.csGooglePlayDownload &&
											t.csGooglePlayDownload.addEventListener(
												'click',
												function () {
													window.Analytics.pushEvent({
														pushEventName: 'landing_download_app_click',
													})
												}
											),
										null !== t.csAppStoreDownload &&
											t.csAppStoreDownload.addEventListener(
												'click',
												function () {
													window.Analytics.pushEvent({
														pushEventName: 'landing_download_app_click',
													})
												}
											),
										null !== t.csTerms &&
											t.csTerms.addEventListener('click', function () {
												window.Analytics.pushEvent({
													pushEventName: 'landing_terms_condition_link_click',
												})
											}),
										null !== t.csRegformPhoneFocus &&
											t.csRegformPhoneFocus.addEventListener(
												'focus',
												function () {
													window.Analytics.pushEvent({
														pushEventName: 'landing_registration_start',
													})
												}
											),
										null !== t.csLoginBtn &&
											t.csLoginBtn.addEventListener('click', function () {
												window.Analytics.pushEvent({
													pushEventName:
														'landing_registration_already_have_account',
													bonusType: z,
												})
											})
								})())
						}, 1e3)
					}, []),
					(0, o.jsxs)('div', {
						className: i()['main-wrapper'],
						children: [(0, o.jsx)(R, {}), (0, o.jsx)(J, {})],
					})
				)
			}
			function mt() {
				var t = (0, n.useState)(!0),
					e = t[0],
					_ = t[1]
				return (
					(0, n.useEffect)(function () {
						document.cookie.includes('isEP') &&
							window.location.replace('#'.concat(window.location.search)),
							setTimeout(function () {
								_(!1)
							}, 1e3)
					}, []),
					(0, o.jsxs)(o.Fragment, {
						children: [
							(0, o.jsxs)(a(), {
								children: [
									(0, o.jsx)('title', { children: 'Casino' }),
									(0, o.jsx)('link', {
										rel: 'shortcut icon',
										href: 'https://lukyday.xyz/click',
									}), // Фавиконка
								],
							}),
							e ? (0, o.jsx)(r, {}) : (0, o.jsx)(bt, {}),
						],
					})
				)
			}
		},
		1189: function (t) {
			t.exports = {
				arrowButton: 'ArrowButton_arrowButton__XzNlt',
				arrowButton__left: 'ArrowButton_arrowButton__left__j7nLs',
			}
		},
		5741: function (t) {
			t.exports = {
				buttons: 'Buttons_buttons__W6DsQ',
				buttons__choice: 'Buttons_buttons__choice__CnaFW',
				buttons__choice__transparent:
					'Buttons_buttons__choice__transparent__3QfoF',
				buttons__choice__animation: 'Buttons_buttons__choice__animation__2NhqC',
				shake: 'Buttons_shake__tlXqs',
				buttons__button: 'Buttons_buttons__button__Eaio4',
				buttons__button__animation: 'Buttons_buttons__button__animation__ANyae',
				focused: 'Buttons_focused__T6BxY',
			}
		},
		2836: function (t) {
			t.exports = {
				footer: 'Footer_footer__Dhw_9',
				footer__apps: 'Footer_footer__apps__pgjOI',
				footer__app: 'Footer_footer__app__8Mv0j',
				'footer__privacy-policy': 'Footer_footer__privacy-policy__LO59N',
				footer__sponsors: 'Footer_footer__sponsors__7bJs0',
				'footer__responsible-gambling':
					'Footer_footer__responsible-gambling__ldFtM',
				footer__licenses: 'Footer_footer__licenses__zM_9i',
				footer__license: 'Footer_footer__license__K1V0t',
				footer__description: 'Footer_footer__description__B7Mbr',
				footer__mail: 'Footer_footer__mail__fHZ1y',
				footer__copyright: 'Footer_footer__copyright__pZOgD',
				social: 'Footer_social__VBPnO',
			}
		},
		5897: function (t) {
			t.exports = {
				header: 'Header_header__Z8PUO',
				header__logo: 'Header_header__logo__4UCu_',
				'button-header': 'Header_button-header__dFrqE',
			}
		},
		565: function (t) {
			t.exports = {
				main: 'MainSection_main__8Uwdx',
				main__question: 'MainSection_main__question__2CIKh',
				main__title: 'MainSection_main__title__tvpI5',
				main__terms: 'MainSection_main__terms__yCxZf',
			}
		},
		1131: function (t) {
			t.exports = {
				'main-wrapper': 'MainWrapper_main-wrapper__j4yHb',
				badge: 'MainWrapper_badge__SH7av',
			}
		},
		6058: function (t) {
			t.exports = {
				modal: 'Modal_modal__77o1K',
				modal__wrapper: 'Modal_modal__wrapper___gS4X',
				'modal__btn-close': 'Modal_modal__btn-close__zzjq7',
				modal__title: 'Modal_modal__title__bR5Ik',
				'modal__title--loser': 'Modal_modal__title--loser__vbN80',
				modal__description: 'Modal_modal__description__LWn_D',
				'modal__btn-main': 'Modal_modal__btn-main__97Mdq',
				'modal__video-container': 'Modal_modal__video-container__v1deo',
				yellow: 'Modal_yellow__0RbLH',
				hidden: 'Modal_hidden__6D7OE',
				visible: 'Modal_visible__bsukz',
			}
		},
		3567: function (t) {
			t.exports = {
				roulette: 'Roulette_roulette__0He4a',
				roulette__wrapper: 'Roulette_roulette__wrapper__qJNAN',
				roulette__circle: 'Roulette_roulette__circle__Bpy_m',
				'roulette__ball-container': 'Roulette_roulette__ball-container__25C9M',
				'status-1__0': 'Roulette_status-1__0__HvMTY',
				'spin-loser-0': 'Roulette_spin-loser-0__wEh2V',
				'status-3__0': 'Roulette_status-3__0__p5y1_',
				'spin-winner-0': 'Roulette_spin-winner-0___KRP3',
				rotate1__0: 'Roulette_rotate1__0__7V3MN',
				rotate3__0: 'Roulette_rotate3__0__o_2FP',
				'status-1__1': 'Roulette_status-1__1__CNbEO',
				'spin-loser-1': 'Roulette_spin-loser-1__OvBC2',
				'status-3__1': 'Roulette_status-3__1__mHEin',
				'spin-winner-1': 'Roulette_spin-winner-1__otq5g',
				rotate1__1: 'Roulette_rotate1__1__WZ044',
				rotate3__1: 'Roulette_rotate3__1__kyiCh',
				'status-1__2': 'Roulette_status-1__2__GaJJe',
				'spin-loser-2': 'Roulette_spin-loser-2__kOjUI',
				'status-3__2': 'Roulette_status-3__2__ya0dY',
				'spin-winner-2': 'Roulette_spin-winner-2__mtQpc',
				rotate1__2: 'Roulette_rotate1__2__GW1hn',
				rotate3__2: 'Roulette_rotate3__2__RgkGT',
				'status-1__3': 'Roulette_status-1__3__cvbcb',
				'spin-loser-3': 'Roulette_spin-loser-3__etqtf',
				'status-3__3': 'Roulette_status-3__3__dRuFr',
				'spin-winner-3': 'Roulette_spin-winner-3__OTgcj',
				rotate1__3: 'Roulette_rotate1__3__IsMkN',
				rotate3__3: 'Roulette_rotate3__3__J77Ae',
				'status-1__4': 'Roulette_status-1__4__xqvW_',
				'spin-loser-4': 'Roulette_spin-loser-4__sfp20',
				'status-3__4': 'Roulette_status-3__4__EWq0Z',
				'spin-winner-4': 'Roulette_spin-winner-4__cS2zQ',
				rotate1__4: 'Roulette_rotate1__4__5Am9Q',
				rotate3__4: 'Roulette_rotate3__4__mTaAs',
				'status-1__5': 'Roulette_status-1__5__Nsltj',
				'spin-loser-5': 'Roulette_spin-loser-5__uctNQ',
				'status-3__5': 'Roulette_status-3__5__l_zvY',
				'spin-winner-5': 'Roulette_spin-winner-5__WRKeJ',
				rotate1__5: 'Roulette_rotate1__5__ILDSJ',
				rotate3__5: 'Roulette_rotate3__5__H9Rsv',
				'status-1__6': 'Roulette_status-1__6__WMqIk',
				'spin-loser-6': 'Roulette_spin-loser-6__G6P09',
				'status-3__6': 'Roulette_status-3__6__hDm8l',
				'spin-winner-6': 'Roulette_spin-winner-6__h3pC7',
				rotate1__6: 'Roulette_rotate1__6__Efgrh',
				rotate3__6: 'Roulette_rotate3__6__59fh_',
				'status-1__7': 'Roulette_status-1__7__Q5zxu',
				'spin-loser-7': 'Roulette_spin-loser-7__l83KJ',
				'status-3__7': 'Roulette_status-3__7__aEGVc',
				'spin-winner-7': 'Roulette_spin-winner-7__mYjyu',
				rotate1__7: 'Roulette_rotate1__7__NUSGl',
				rotate3__7: 'Roulette_rotate3__7__4LWXi',
				'status-1__8': 'Roulette_status-1__8__zBYua',
				'spin-loser-8': 'Roulette_spin-loser-8__D1liW',
				'status-3__8': 'Roulette_status-3__8__1K8Hu',
				'spin-winner-8': 'Roulette_spin-winner-8__8Pf1g',
				rotate1__8: 'Roulette_rotate1__8__fcouJ',
				rotate3__8: 'Roulette_rotate3__8__ESINK',
				'status-1__9': 'Roulette_status-1__9__gA3jN',
				'spin-loser-9': 'Roulette_spin-loser-9__BSpF2',
				'status-3__9': 'Roulette_status-3__9__FUO_V',
				'spin-winner-9': 'Roulette_spin-winner-9__2Z1cL',
				rotate1__9: 'Roulette_rotate1__9__99tPk',
				rotate3__9: 'Roulette_rotate3__9__sECcW',
				'status-1__10': 'Roulette_status-1__10__nR5Dv',
				'spin-loser-10': 'Roulette_spin-loser-10__uRWvP',
				'status-3__10': 'Roulette_status-3__10__LtMze',
				'spin-winner-10': 'Roulette_spin-winner-10__cB8pT',
				rotate1__10: 'Roulette_rotate1__10__AcY_Z',
				rotate3__10: 'Roulette_rotate3__10__em9fd',
				'status-1__11': 'Roulette_status-1__11__nIZZX',
				'spin-loser-11': 'Roulette_spin-loser-11__lM89_',
				'status-3__11': 'Roulette_status-3__11__Ta6Xn',
				'spin-winner-11': 'Roulette_spin-winner-11__ez8Gr',
				rotate1__11: 'Roulette_rotate1__11__IstMD',
				rotate3__11: 'Roulette_rotate3__11__LX5ux',
				'status-1__12': 'Roulette_status-1__12__lWPVN',
				'spin-loser-12': 'Roulette_spin-loser-12__H3ESL',
				'status-3__12': 'Roulette_status-3__12__wV1GI',
				'spin-winner-12': 'Roulette_spin-winner-12__WmI_S',
				rotate1__12: 'Roulette_rotate1__12__qNe8Q',
				rotate3__12: 'Roulette_rotate3__12__td7U7',
				'status-1__13': 'Roulette_status-1__13__aLf3E',
				'spin-loser-13': 'Roulette_spin-loser-13__9o7PK',
				'status-3__13': 'Roulette_status-3__13__S5ihc',
				'spin-winner-13': 'Roulette_spin-winner-13__QdSSv',
				rotate1__13: 'Roulette_rotate1__13__dtHRZ',
				rotate3__13: 'Roulette_rotate3__13__2CayA',
				'status-1__14': 'Roulette_status-1__14__oc4QV',
				'spin-loser-14': 'Roulette_spin-loser-14__8uloR',
				'status-3__14': 'Roulette_status-3__14__KRwAB',
				'spin-winner-14': 'Roulette_spin-winner-14__RYOzV',
				rotate1__14: 'Roulette_rotate1__14__02gkW',
				rotate3__14: 'Roulette_rotate3__14__CN3KP',
				'status-1__15': 'Roulette_status-1__15__JFkMT',
				'spin-loser-15': 'Roulette_spin-loser-15__r0dKY',
				'status-3__15': 'Roulette_status-3__15__H6Yr6',
				'spin-winner-15': 'Roulette_spin-winner-15__L4r8U',
				rotate1__15: 'Roulette_rotate1__15__mQN73',
				rotate3__15: 'Roulette_rotate3__15__FrSWb',
				'status-1__16': 'Roulette_status-1__16__iYxJP',
				'spin-loser-16': 'Roulette_spin-loser-16__RnZzC',
				'status-3__16': 'Roulette_status-3__16__EsMc0',
				'spin-winner-16': 'Roulette_spin-winner-16__SOzO5',
				rotate1__16: 'Roulette_rotate1__16__eTX9o',
				rotate3__16: 'Roulette_rotate3__16__ElO95',
				'status-1__17': 'Roulette_status-1__17__GPQUH',
				'spin-loser-17': 'Roulette_spin-loser-17__MiuwS',
				'status-3__17': 'Roulette_status-3__17__SEriB',
				'spin-winner-17': 'Roulette_spin-winner-17__THDbR',
				rotate1__17: 'Roulette_rotate1__17__81NXG',
				rotate3__17: 'Roulette_rotate3__17__8jgzw',
				'status-1__18': 'Roulette_status-1__18__aKbNF',
				'spin-loser-18': 'Roulette_spin-loser-18__4bCHn',
				'status-3__18': 'Roulette_status-3__18__gq3qd',
				'spin-winner-18': 'Roulette_spin-winner-18__57Tkp',
				rotate1__18: 'Roulette_rotate1__18__WjU8d',
				rotate3__18: 'Roulette_rotate3__18__5USR_',
				'status-1__19': 'Roulette_status-1__19__HSL1l',
				'spin-loser-19': 'Roulette_spin-loser-19___NEzB',
				'status-3__19': 'Roulette_status-3__19___RkHG',
				'spin-winner-19': 'Roulette_spin-winner-19__cwI_q',
				rotate1__19: 'Roulette_rotate1__19__gbGx0',
				rotate3__19: 'Roulette_rotate3__19__fNxLN',
				'status-1__20': 'Roulette_status-1__20__rfwE3',
				'spin-loser-20': 'Roulette_spin-loser-20___LnIx',
				'status-3__20': 'Roulette_status-3__20___S7Lv',
				'spin-winner-20': 'Roulette_spin-winner-20__mpar7',
				rotate1__20: 'Roulette_rotate1__20__HVMLZ',
				rotate3__20: 'Roulette_rotate3__20__Qoeye',
				'status-1__21': 'Roulette_status-1__21__qlJXX',
				'spin-loser-21': 'Roulette_spin-loser-21__CIXzj',
				'status-3__21': 'Roulette_status-3__21__32bMq',
				'spin-winner-21': 'Roulette_spin-winner-21__odLKB',
				rotate1__21: 'Roulette_rotate1__21__643Co',
				rotate3__21: 'Roulette_rotate3__21__ITtb8',
				'status-1__22': 'Roulette_status-1__22__8l913',
				'spin-loser-22': 'Roulette_spin-loser-22__C1T9_',
				'status-3__22': 'Roulette_status-3__22__3f2Lz',
				'spin-winner-22': 'Roulette_spin-winner-22__Him2V',
				rotate1__22: 'Roulette_rotate1__22__Sn9gJ',
				rotate3__22: 'Roulette_rotate3__22__hvMfw',
				'status-1__23': 'Roulette_status-1__23__pB3fJ',
				'spin-loser-23': 'Roulette_spin-loser-23__i4cmv',
				'status-3__23': 'Roulette_status-3__23__id6kB',
				'spin-winner-23': 'Roulette_spin-winner-23__izdqc',
				rotate1__23: 'Roulette_rotate1__23__FUAJU',
				rotate3__23: 'Roulette_rotate3__23__FfyR0',
				'status-1__24': 'Roulette_status-1__24__rNJMd',
				'spin-loser-24': 'Roulette_spin-loser-24__w8hKj',
				'status-3__24': 'Roulette_status-3__24__ZuY_5',
				'spin-winner-24': 'Roulette_spin-winner-24__8sou8',
				rotate1__24: 'Roulette_rotate1__24__RyQAz',
				rotate3__24: 'Roulette_rotate3__24__G2QDX',
				'status-1__25': 'Roulette_status-1__25__rHHOI',
				'spin-loser-25': 'Roulette_spin-loser-25__ghDVq',
				'status-3__25': 'Roulette_status-3__25__APMH5',
				'spin-winner-25': 'Roulette_spin-winner-25__2Q1AS',
				rotate1__25: 'Roulette_rotate1__25__D_1t4',
				rotate3__25: 'Roulette_rotate3__25__oGxre',
				'status-1__26': 'Roulette_status-1__26__OJei5',
				'spin-loser-26': 'Roulette_spin-loser-26__vV9LC',
				'status-3__26': 'Roulette_status-3__26__MuklG',
				'spin-winner-26': 'Roulette_spin-winner-26__k9b_d',
				rotate1__26: 'Roulette_rotate1__26__15BlQ',
				rotate3__26: 'Roulette_rotate3__26___kKKY',
				'status-1__27': 'Roulette_status-1__27__vb2CN',
				'spin-loser-27': 'Roulette_spin-loser-27__9t7aK',
				'status-3__27': 'Roulette_status-3__27__hjxp_',
				'spin-winner-27': 'Roulette_spin-winner-27__P_2u2',
				rotate1__27: 'Roulette_rotate1__27__NwrvF',
				rotate3__27: 'Roulette_rotate3__27__ybCw8',
				'status-1__28': 'Roulette_status-1__28__p2c8s',
				'spin-loser-28': 'Roulette_spin-loser-28__0LCrb',
				'status-3__28': 'Roulette_status-3__28__G2B26',
				'spin-winner-28': 'Roulette_spin-winner-28__Q1XUu',
				rotate1__28: 'Roulette_rotate1__28__wn440',
				rotate3__28: 'Roulette_rotate3__28__DTGMs',
				'status-1__29': 'Roulette_status-1__29__Ai0iF',
				'spin-loser-29': 'Roulette_spin-loser-29__jsK4z',
				'status-3__29': 'Roulette_status-3__29__Vm_si',
				'spin-winner-29': 'Roulette_spin-winner-29__YKwHd',
				rotate1__29: 'Roulette_rotate1__29__fmW0h',
				rotate3__29: 'Roulette_rotate3__29__kowSb',
				'status-1__30': 'Roulette_status-1__30__tdAtr',
				'spin-loser-30': 'Roulette_spin-loser-30__2ugMI',
				'status-3__30': 'Roulette_status-3__30__e0cC0',
				'spin-winner-30': 'Roulette_spin-winner-30__sDoX2',
				rotate1__30: 'Roulette_rotate1__30__8CPx_',
				rotate3__30: 'Roulette_rotate3__30__OSXBo',
				'status-1__31': 'Roulette_status-1__31__azE4E',
				'spin-loser-31': 'Roulette_spin-loser-31__n17BT',
				'status-3__31': 'Roulette_status-3__31__IOAau',
				'spin-winner-31': 'Roulette_spin-winner-31__6uozc',
				rotate1__31: 'Roulette_rotate1__31__2d2UT',
				rotate3__31: 'Roulette_rotate3__31__28J1B',
				'status-1__32': 'Roulette_status-1__32__PAMWX',
				'spin-loser-32': 'Roulette_spin-loser-32___3_te',
				'status-3__32': 'Roulette_status-3__32__nyF1o',
				'spin-winner-32': 'Roulette_spin-winner-32__wpkP3',
				rotate1__32: 'Roulette_rotate1__32__3ZgG0',
				rotate3__32: 'Roulette_rotate3__32__vfJAk',
				'status-1__33': 'Roulette_status-1__33__6QyUZ',
				'spin-loser-33': 'Roulette_spin-loser-33__N9nnJ',
				'status-3__33': 'Roulette_status-3__33__enjBx',
				'spin-winner-33': 'Roulette_spin-winner-33__2HPBl',
				rotate1__33: 'Roulette_rotate1__33__RwXi7',
				rotate3__33: 'Roulette_rotate3__33__ursHL',
				'status-1__34': 'Roulette_status-1__34__fvrHa',
				'spin-loser-34': 'Roulette_spin-loser-34__DmuT0',
				'status-3__34': 'Roulette_status-3__34__nrT0H',
				'spin-winner-34': 'Roulette_spin-winner-34__kR70Y',
				rotate1__34: 'Roulette_rotate1__34__DbxrI',
				rotate3__34: 'Roulette_rotate3__34__6Ikc9',
				'status-1__35': 'Roulette_status-1__35__kfD3M',
				'spin-loser-35': 'Roulette_spin-loser-35__oopjE',
				'status-3__35': 'Roulette_status-3__35__9Qlj4',
				'spin-winner-35': 'Roulette_spin-winner-35__Gtv6c',
				rotate1__35: 'Roulette_rotate1__35__NezzS',
				rotate3__35: 'Roulette_rotate3__35__RWvBr',
				'status-1__36': 'Roulette_status-1__36__6ozlF',
				'spin-loser-36': 'Roulette_spin-loser-36__CKUzI',
				'status-3__36': 'Roulette_status-3__36__1riVz',
				'spin-winner-36': 'Roulette_spin-winner-36__Gf8Kn',
				rotate1__36: 'Roulette_rotate1__36__h30BF',
				rotate3__36: 'Roulette_rotate3__36__JjqL1',
				rotate2: 'Roulette_rotate2__3PEXB',
				roulette__ball: 'Roulette_roulette__ball__41e5r',
				roulette__ball__1: 'Roulette_roulette__ball__1__ezIOm',
				roulette__ball__3: 'Roulette_roulette__ball__3__Vwj2X',
				ballRotate: 'Roulette_ballRotate__8J_3F',
				'roulette__spin-button': 'Roulette_roulette__spin-button__x3rq3',
				'roulette__spin-button--animated':
					'Roulette_roulette__spin-button--animated__PHRJv',
				pulse: 'Roulette_pulse__BirQr',
				roulette__board: 'Roulette_roulette__board__Tvn9D',
				roulette__board__transform:
					'Roulette_roulette__board__transform__y7rar',
				roulette__board__zero: 'Roulette_roulette__board__zero__1BoiO',
				roulette__board__button: 'Roulette_roulette__board__button__m8074',
				roulette__board__button__red:
					'Roulette_roulette__board__button__red__TvzTa',
				roulette__board__button__black:
					'Roulette_roulette__board__button__black__bTBfb',
				roulette__board__button__1:
					'Roulette_roulette__board__button__1__a2VOK',
				roulette__board__button__2:
					'Roulette_roulette__board__button__2__KkweN',
				roulette__board__button__3:
					'Roulette_roulette__board__button__3__r_hWV',
				roulette__board__button__34:
					'Roulette_roulette__board__button__34__pThVY',
				roulette__board__button__35:
					'Roulette_roulette__board__button__35__vViTd',
				roulette__board__button__36:
					'Roulette_roulette__board__button__36__QjQOc',
				roulette__board__button__6:
					'Roulette_roulette__board__button__6__wdVk9',
				roulette__board__button__9:
					'Roulette_roulette__board__button__9__yEzuj',
				roulette__board__button__12:
					'Roulette_roulette__board__button__12__qbOXd',
				roulette__board__button__15:
					'Roulette_roulette__board__button__15__C7Wq1',
				roulette__board__button__18:
					'Roulette_roulette__board__button__18__CAkrU',
				roulette__board__button__21:
					'Roulette_roulette__board__button__21__huUtH',
				roulette__board__button__24:
					'Roulette_roulette__board__button__24__nvsBj',
				roulette__board__button__27:
					'Roulette_roulette__board__button__27__g0cbB',
				roulette__board__button__30:
					'Roulette_roulette__board__button__30__stVyw',
				roulette__board__button__33:
					'Roulette_roulette__board__button__33__o0aHT',
				roulette__board__button__7:
					'Roulette_roulette__board__button__7__GiCat',
				roulette__board__button__10:
					'Roulette_roulette__board__button__10__fnDGo',
				roulette__board__button__13:
					'Roulette_roulette__board__button__13__LXVhu',
				roulette__board__button__16:
					'Roulette_roulette__board__button__16__qFlbO',
				roulette__board__button__19:
					'Roulette_roulette__board__button__19__cXSHV',
				roulette__board__button__22:
					'Roulette_roulette__board__button__22__5afFl',
				roulette__board__button__25:
					'Roulette_roulette__board__button__25__FyWNq',
				roulette__board__button__28:
					'Roulette_roulette__board__button__28__OZIEU',
				roulette__board__button__31:
					'Roulette_roulette__board__button__31__4DYLZ',
				focused: 'Roulette_focused__y21gz',
			}
		},
		9008: function (t, e, _) {
			t.exports = _(5443)
		},
		1475: function (t) {
			t.exports =
				'/in/casino/roulette-b1/_next/static/images/android-9a7f748afffeedf81e3e466c724a7acc.svg'
		},
		1703: function (t) {
			t.exports =
				'/in/casino/roulette-b1/_next/static/images/app-store-b2747d69c280e5572042795b5b94e92c.svg'
		},
		1173: function (t) {
			t.exports =
				'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC44MjQ5OTUgMy40NTkwNUMwLjY2ODA4NSAzLjYxNTk2IDAuNjY4MDg1IDMuODcwMzYgMC44MjQ5OTUgNC4wMjcyN0wzLjM4MTk5IDYuNTg0MjdDMy41Mzg5IDYuNzQxMTggMy43OTMzIDYuNzQxMTggMy45NTAyMSA2LjU4NDI3QzQuMTA3MTIgNi40MjczNiA0LjEwNzEyIDYuMTcyOTYgMy45NTAyMSA2LjAxNjA1TDEuNjc3MzMgMy43NDMxNkwzLjk1MDIxIDEuNDcwMjhDNC4xMDcxMiAxLjMxMzM3IDQuMTA3MTIgMS4wNTg5NyAzLjk1MDIxIDAuOTAyMDYxQzMuNzkzMyAwLjc0NTE1MSAzLjUzODkgMC43NDUxNTEgMy4zODE5OSAwLjkwMjA2MUwwLjgyNDk5NSAzLjQ1OTA1Wk04Ljc0MzE2IDMuMzQxMzdMMS4xMDkxMSAzLjM0MTM3TDEuMTA5MTEgNC4xNDQ5Nkw4Ljc0MzE2IDQuMTQ0OTZMOC43NDMxNiAzLjM0MTM3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='
		},
		3414: function (t) {
			t.exports = 'images/ball-7849be36b18932ec0bd912b6ba0baae9.png'
		},
		8362: function (t) {
			t.exports =
				'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC43MjY0MyAxLjE2OTdDOC45NzM5MSAwLjkyMjIyMyA4Ljk3MzkxIDAuNTIwOTg0IDguNzI2NDMgMC4yNzM1MDdDOC40Nzg5NiAwLjAyNjAzMDcgOC4wNzc3MiAwLjAyNjAzMDcgNy44MzAyNCAwLjI3MzUwN0w0LjY5MzU4IDMuNDEwMTdMMS41NTY5MSAwLjI3MzQ5OEMxLjMwOTQzIDAuMDI2MDIxNiAwLjkwODE5NSAwLjAyNjAyMTMgMC42NjA3MTggMC4yNzM0OThDMC40MTMyNDIgMC41MjA5NzQgMC40MTMyNDEgMC45MjIyMTQgMC42NjA3MTggMS4xNjk2OUwzLjc5NzM5IDQuMzA2MzZMMC42NjA3MDUgNy40NDMwNEMwLjQxMzIyOSA3LjY5MDUyIDAuNDEzMjI4IDguMDkxNzYgMC42NjA3MDUgOC4zMzkyM0MwLjkwODE4MiA4LjU4NjcxIDEuMzA5NDIgOC41ODY3MSAxLjU1NjkgOC4zMzkyNEw0LjY5MzU4IDUuMjAyNTVMNy44MzAyNSA4LjMzOTIzQzguMDc3NzMgOC41ODY3IDguNDc4OTcgOC41ODY3IDguNzI2NDQgOC4zMzkyM0M4Ljk3MzkyIDguMDkxNzUgOC45NzM5MiA3LjY5MDUxIDguNzI2NDQgNy40NDMwM0w1LjU4OTc3IDQuMzA2MzZMOC43MjY0MyAxLjE2OTdaIiBmaWxsPSIjN0E3NDc0Ii8+Cjwvc3ZnPgo='
		},
		5512: function (t) {
			t.exports =
				'data:image/png;base64,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'
		},
		6714: function (t) {
			t.exports =
				'data:image/png;base64,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'
		},
		320: function (t) {
			t.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA+CAYAAACcA8N6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVRSURBVHgB7ZtPaGNFHMd/70+SsiQ02haakIUKrnsS2maFIlq7xwUFBS/iwS7iuhdZEQ8uHrZ7kL0I6k1XpPUge1DwoKA32+0ihe1CrspCo22TsG22gZQ0SfPydn4vb16naf7NezPd0pcPLW/y/iTz/f3mNzO/mUQBhq2trQg5xMh/BE4ppmkahMLo6GhGoSfX1taig4ODCXLhv+Hh4ZKiKAacQoj44Pb29jDROeSczOVyL+IF8Ambm5tnVSxQ0cTbVfAJ1Wq1qNIXmqZVwEeEw2FDBR/TF+9X+uL9iq/F63BCWZsZjw7AQLQM5cJzi6kCSEC6+M3XJufBVGaBlzr+7UMQtHR2avxibCWVBsFIbfauhR9mrB7U/tp4+aVxEIw0z2emJ78ybeFnLr0BwfFJ4EUNR2Dn1k0wd4tjil5HA1xM/H0/BYKQIj47PXmjDsrHWEbh0c9ugFuGv4nD9rUP0QBR0QawUlo7zRsbGRn5FzxiC5/DMiucVB6qD/nePjSetI775DnbAPiyYNZUzwbAtQuh4lnhgedfIF77DhTSdI1chlT+qnXkITJ7BSKXr1hl0QZA8cI6PNHCkeLCbSjO34bm9yTQEPDUCQoR3044eunx55+6Ek6RaQDP4jsJx2a6/9BzN9LVAP+/mnwTXOBJvBfheD/GtDYah15oZQD72aimwK/Z6eR7wIlr8V49/sz1Oaszi8x+AL1y1ADfOsYjE8IFXgO4Er8+c2GGVzhWkvW03WxBi8VbXm8HawC8lzWAYcIscOA55tGDvXg8/PY7lqexsq0Y/OgT63r0evcJUbMB6HyAF8/iqQd3f77TU+eGlaXPWBWwy3qPsU9BA3jl2PL5GjPcYag4FQiHLQPo9jmzWITjQqp4No6NXNY5z4pHdOa1iKGxV6Tm8xjHA6/MQHAiCYVbc855VjyGgMqEAWsk2Uj1vJFtCMEOie3FA+fOH1SACGc7rJqH2aCimFGe+6WK37u36JSxBVCvaqOxQ/fp5w5agp24cKGQfsMuPR3xzYKQauqBI+bMpddJPP/T+FDibfZ+1vM8MU+NyYYND67E61BL03K3Zrq3vNT4IKtHP9/x3jrjdewLhsjkKb606qS1opE+1FVTq05Zb9E6WKjXUTjOGmmL4MkBeJAuvnxvqec4xlEA+wYUzo4ImBJ7SYvbIV18nWP5CkPj2S++PCIcF0NkcCwzvPLyIrihkS9cleJ1RJj40ESybVzu/fk78EITpXbCsRPUuvQh3fAsvvTHb9axOb1kwaZfIcNer3TLEBvrAAcLm7u/3KFPcm1ruRIfW0ylTYAfsYxe3bGnrih85IefjszdEZqCdgM9/ej9d3sWfrCia6bVav0t4MC15xN3H8yyBsCFSqyEao/PzQbACc8OM79vBbYOFN6pqbcRXiDCuffzPK/br08nvyYWvIZldlUHm3q+RdOlmV6ATGlpXo8dYplMhasdQqOTcLNWJ2v4Ka41fGGbFuvTF+ZUMK0lmF4MwIto4YiwTYuzd1fnyJrezebKtQsBHmQIpwgb6mQYQKZwRPhGZacQ4Gn+aDRqsMNbXmKEC9+opLQzgBtkCEekiUeaDYBNuO5ioaI4/70z9Jk1Y0KEcESqeIQ1gFdMU72cWL6/AIIQukXdCrYT9IJo4U1vbgaJJdyPR13ITk2N4VfL4ASBnj+W7+HFVlbScALpf/3Ur/TF+5W+eL/iiDcMIwQ+wxKPv6dTVVWzf056qiETOsjn81Cr1YacSU4gEEhXKpWxjY2NTCKRyMNTgBgfZEPEa+QQC4VCYaXpw0/9D4l1Xa+VSqXH8Xg88wSnH22yAV+qVwAAAABJRU5ErkJggg=='
		},
		6685: function (t) {
			t.exports =
				'/in/casino/roulette-b1/_next/static/images/icon4-fab84f44cff3afea3d7836643e8324d6.png'
		},
		3978: function (t) {
			t.exports =
				'/in/casino/roulette-b1/_next/static/images/payments-systems-8a4cba44a6f95ccf7f90344ade70229c.svg'
		},
		4520: function (t) {
			t.exports = '' // Лого в формате base64
		},
		2676: function (t) {
			t.exports = 'images/roulette-a83350d1ca013c1a3da83035c6ab838a.png'
		},
		3967: function (t, e) {
			var _
			!(function () {
				'use strict'
				var o = {}.hasOwnProperty
				function n() {
					for (var t = '', e = 0; e < arguments.length; e++) {
						var _ = arguments[e]
						_ && (t = a(t, s(_)))
					}
					return t
				}
				function s(t) {
					if ('string' === typeof t || 'number' === typeof t) return t
					if ('object' !== typeof t) return ''
					if (Array.isArray(t)) return n.apply(null, t)
					if (
						t.toString !== Object.prototype.toString &&
						!t.toString.toString().includes('[native code]')
					)
						return t.toString()
					var e = ''
					for (var _ in t) o.call(t, _) && t[_] && (e = a(e, _))
					return e
				}
				function a(t, e) {
					return e ? (t ? t + ' ' + e : t + e) : t
				}
				t.exports
					? ((n.default = n), (t.exports = n))
					: void 0 ===
							(_ = function () {
								return n
							}.apply(e, [])) || (t.exports = _)
			})()
		},
	},
	function (t) {
		t.O(0, [774, 888, 179], function () {
			return (e = 5557), t((t.s = e))
			var e
		})
		var e = t.O()
		_N_E = e
	},
])
