# originals-backend
backend of originals webApp

Originals’ WebApp Development Design

Features
1.	Main Page
A.	Setting Articles shown on main page
B.	The nearest date of meeting or the most important meeting can be set
2.	meeting
A.	gather in meeting
i.	writing meeting
1.	title
2.	time
3.	place
4.	price
5.	etc
6.	deadline
A.	if deadline is over. Participating is impossible. 
7.	Organizer can close the booking, then participants cannot cancel or reserve the meeting
ii.	update
iii.	delete
B.	participating in meeting
i.	showing list who are in meeting
ii.	participating is impossible if meeting is overbooked.
iii.	Cancelling is Free. 
iv.	If limit time is over or Organizer close the booking, additional participant is impossible
3.	bulletin
A.	writing article
i.	title
ii.	content
iii.	photos
B.	update
C.	delete
D.	setting announcement
i.	setting announcement on top of all articles
ii.	cancel the announcement
E.	classifying articles with some standards
i.	standards
1.	announcement
2.	free articles
3.	Introduction
4.	Feedback
5.	Anonymous articles
ii.	By standards bulletin list can be sorted.
F.	No paging
4.	Like
A.	Setting like on posts, comments
B.	Like Count can be shown on post and comment
C.	People can be shown who have clicked the like on post
5.	Comment 
A.	Leaving a comment on post
B.	Comment on comment feature is limited
6.	Views
A.	Views are shown on the post
B.	Views are not overlapped specified by user’s ID
7.	Book
A.	All the books can be listed.
B.	Search features must be implemented
i.	Title
ii.	Publisher
iii.	Author
iv.	content
C.	Books are listed in two ways
i.	Grid
1.	Grid shows the photo of books 
ii.	List
1.	List shows the title of books
D.	Book’s detail page must show the reservation status on calendar
8.	Reservation
A.	In book page the reservation status is shown.
B.	User is shown in calendar with reservation start date and end date. 
C.	If there is no reservation, user can reserve the book for 2 weeks.
i.	2 weeks’ start date and end date is automatically set.
D.	If there is reservation, user can reserve the book after the end date of just before reservation.
E.	Reservation can be extended if there is no reservation after the end date.
9.	Profile
A.	데이터베이스 내 데이터들 showing
