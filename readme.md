THE RYAN ACADEMY OF IRISH DANCE
===============================


CONTENTS OF THIS FILE
---------------------
1. PROJECT DESCRIPTION
2. FULFILLMENT OF REQUIREMENTS  
3. SPECIAL INSTRUCTIONS
4. FUTURE DEVELOPMENT
#


PROJECT DESCRIPTION
-------------------

Founded in 2014, The Ryan Academy of Irish dance offers traditional Irish Dance instruction to children and adults in Southern Indiana.

A lifelong hobby turned side business and passion project, I have run my dance studio in addition to full time employment for the last seven years. 

As a small business owner, I'm used to completing the majority of business functions myself and creating the website for my dance studio was no exception. I originally created RyanAcademyIrishDance.com using SquareSpace (with the help of my talented graphic designer sister) and have always loved the clean layout and simplicity which required little maintaince over time.

For this project, I decided to develop a visual recreation of the existing site, adding my own enhancements in layout, useability and design.

---------------------------------------------------------------

FULFILLMENT OF REQUIREMENTS
---------------------------
* MEDIA QUERIES

    The project was created using a mobile first approach and was designed to support a minimum screen width of 320px. From 320px until the first breakpoint (640px), the primary navigation links are hidden inside the hamburger icon in the top right corner. Clicking the hamburger icon will hide or display the navigation menu which is located beneath the logo and above the banner image. The informational cards are displayed in a single column layout. 

    The first media query was implemented at a min-width of 640px and is designed for tablets, landscape phones and small desktop screens. The hamburger menu is no longer displayed and the primary navigation is now displayed inline with the logo. The informational cards change from a column to row flex-direction, but are sized to ensure a 2x2 grid layout.

    The second media query is used at a break point of 925px for large tablets and desktop screens. At this point the primary navigation remains unchanged from the previous breakpoint, but the informational cards are now displayed on a single row.

* COMMITS

    Currently, the project has 16 commits to the main branch from May 26th to July 23rd. I tried to develop a habit for committing at the end of every coding session.

    I also experimented with branching for feature development. Each branch also has several commits.

* README

    I used markdown to create the readme.md file. VS code has a useful preview feature which can be viewed side by side with the file. 

* CSS FEATURE

    I chose to implement a navigation menu that expands and collapses properly at desktop and mobile sizes. At mobile screen widths (less than 640px), the links are hidden and a hamburger icon displays in the top right corner. Clicking the icon displays or hides the links in a horizontal layout below the logo. At widths greater than or equal to 640px, the hamburger icon is hidden and the links display inline with the logo.

* JAVASCRIPT FEATURE

    Javascript is used to show and hide the primary navigation menu by toggling the display property of the links using the function Document.getElementbyId.

* ONE ADDITIONAL FEATURE FROM ANY LIST

    I used Flexbox to organize my page content areas based on desktop or mobile views. This is evidenced in the following content areas:

    The **navigation links** display either beneath or inline with the logo based on screen size. This was accomplished by changing the flex basis and flex order of the logo. 

    The **informational cards** which display the school values(confidence, dedication, friendship, tradition) transition from a column > two column > single row layout as the screen width increases from 320px to 640px to 925px.

---------------------------------------------------------------

SPECIAL INSTRUCTIONS
--------------------

The project requirements outlined in this document are all fulfilled on the home page of the site, index.html. Since I am continuing to develop the project, there may be unfinished work/content on the other pages (about.html, registration.html and contact.html) but are excluded from the scope of the project.

**Repository URL:** https://github.com/ojryan01/ryanacademyirishdance

**Vercel URL:** ryanacademyirishdance.vercel.app

---------------------------------------------------------------

FUTURE DEVELOPMENT AND LIMITATIONS
----------------------------------

As much as I learned from the project I realize we have just scratched the surface of the covered languages! With the remaining time in the semester I'd like to build out the remaining pages in the website and continue to build out features from the requirements list to further improve my understanding of HTML, CSS and JS. 

The greatest area for opportunity on this project is that I only completed one of the Javascript features. With additional development time I'd like to continue building out features from the list to improve my understanding of the language.

I'd also like to spend time enhancing the CSS features, especially adding animations to the hamburger icon and creating a slide-out vertical navigation menu. 

----------------------------------------------------------------

