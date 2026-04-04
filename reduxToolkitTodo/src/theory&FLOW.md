                                       𝖎𝖒𝖕𝖔𝖗𝖙𝖆𝖓𝖙✍

redux ek alag cheese hai and react redux ek alag cheese hai . Redux core library hai and react redux uska implementation hai wiring karne ke liye taki redux and react ki aapis me bat cheet ho sake. never mutate your state.

Processes (steps) :-

1. start karte hai store banane se.har application ka generally store sirf ek hota hai jisko kahte hai single source of truth . but sir ne ek exception bataya tha double store ki usme sir ne bataya tha ki uska million of users the isiliye ye karna pada tha unko

.. store me ek configureStore chahiye jisse hamara store configure ho jata hai jiske ander object hota hai
ab store ke ander value update karni hogi to wo har tarh se nahi leti aapko reducer ke through value leni hoti hai data ke flow ke liye wo reducer ka pata poochhta hai

2. ab is cheese(sare reducer store ko batane ke liye) ke liye maine src me feature nam ki ek folder banayi , jisme todo folder bhi tha uske ander todoSlice nam ke file me gya (slice ka matlb feature hi hota hai shayad)

... isme slice banane ke liye ek method diya hai createSlice (hame slice banane ke liye 3 cheese chahiye hota hai
i- name , ii- initialState , iii- reducers ki list chahiye hoti hai jo jo wo kam karne wali hoti hai )

... upar wale cheese me ham sabse pehle upar hi initial state already bana liye the usi me
isme hamne isko nam diya tha todo, fir jo initalState already initialize kiya tha wo de diya then hamne reducers diya jisme key function de sakte the ham. un function ko waha likhne ki jagh ham ek file me likh kar usko import karke current file me late aur jaha par ye use ho raha hai bus waha par nam likh dete.
hame yaha par 2 cheeso ka access milta hai first state and dusra action ... state ke ander update state value in the store milti hai and action ke ander aapko action.payload milti hai and aur bhi cheese milti hai. ek todo banaya action payload me se action ki value nikal li . nanoid ka use karke unique id bana di.
state ka access tha isiliye fir add karne ke liye state ke ander push kar diya
yaha par state preserve rehti hai but pehle hame state ke ander se sare ke sare array nikalna padta , unko spread karna padta , fir apni value dalni padti aur fir mai karta . Context api me aise hi cheeso ko karna padta hai q ki waha state preserve nahi hai . yaha state ka access hota hai to seedha state me push kar dete hai.

hhhhhhhhhhhhhhhhhhhhhhhhhhhwwwwwwwwwwwwwwwwwwwww update wala function isme tumko khud add karna hai wo bhi with icon aur then wo enter todo me bhi jaye aisa kuchh . kya question hai actually samjhne ke liye is lecture ko 1 ghata 5 min 45 second se dekh lo

ab hame isko export karna hai todoSlice file ke is function ko to yaha export karne ke liye hame individual fuctionality chahiye. like agar 10 reducers hai to individually 10 ko export karna padega . q ki aapko nahi pata ki konse wale component me konsa wala reducers use ho jaye

iske ilawa hame ek chahiye sare reducers ka main source export karna. ye main source ko ham is liye export kar rhe hai q ki hame kam me lena hai state ke ander apne store ke ander

3.  ab hame jana tha store ke ander aur dikhana tha ki ye hai hamara reducers ki list \\

4.  Now ab hame components me jana tha jaha par 2 cheese maujood thi i- AddTodo ii- Todos
    jisme value ko add karni hai ya bhejni hai, bhejne ke liye useDispatch() kiye hai , ab is dispatch ke ander jo bhi reducer hai usko dispatch ke zariye bhej diya. Aur hmm apne reducers wale file ko import karna mat bhoolna

5.  Ab value leni kaise hai---- ham Todo file me gye aur lene ke liye useSelector ka istemal karte hai, isse value select ho jati hai bhejne ko to ham kaise bhi bhej sakte hai but value lene ke liye state ka access hona chahiye , state ke ander se jo bhi chahiye store ke ander se use select(pick ) karke le aao kisi variable me.

6.  ab jab cheese varibale me aa gyi hai, iske bad to pure javascript hi hai bas . lagao loop like map , filter aur ye wo and value ko display kar do.
7.  ab remove todo kiya jo ki ek action lena hai yani kuchh value bhejni hai , bhejte time use dispatch ka istemal karna hoga . use dispatch ke liye aapko id bhejni padegi
