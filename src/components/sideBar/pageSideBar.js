import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./pageSideBar.scss";

const PageSideBar = (props) => {
  return (
    <div className="App" style={{backgroundColor:props.backgroundcolor}}>
      <Tabs>
        <TabList>
          <Tab>
            <p>Hyderabadi Briyani</p>
          </Tab>
          <Tab>
            <p>Sticky Rice Payasam</p>
          </Tab>
          <Tab>
            <p>Butter Chicken</p>
          </Tab>
          <Tab>
            <p>Chicken Stew and Appam</p>
          </Tab>
          <Tab>
            <p>Palak Paneer</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content" >
            <p>
              <strong>
                <h2>
                  About Hyderabadi Biryani Recipe | Hyderabadi Chicken Biryani
                  Recipe :
                </h2>
              </strong>
              <hr></hr>
              <p>
                One of the most popular biryani recipe, Hyderabadi Biryani is a
                dish from south region but spread all across the country and
                even abroad. This flavourful and delectable gastronomical magic
                is a treat to relish on and is often cooked for dinner parties
                in north Indian kitchens. Cook it at home to make a mark at your
                dinner party and thank us later!"
              </p>
            </p>

            <strong>
              <h2>
                Ingredients of Hyderabadi Biryani Recipe | Hyderabadi Chicken
                Biryani Recipe :
              </h2>
            </strong>
            <hr></hr>
            <ul className="list">
              <li>1 Kg meat</li>
              <li>1 tbsp salt</li>
              <li>1 tbsp ginger garlic paste</li>
              <li>1 tbsp red chilli paste</li>
              <li>1 tbsp red chilli paste</li>
              <li>1/2 tbsp cardamom powder</li>
              <li>3-4 Cinnamon sticks</li>
              <li>1 tbsp cumin seeds</li>
              <li>4 Cloves</li>
              <li>A pinch of mace</li>
              <li>to taste mint leaves</li>
              <li>2 tbsp lemon juice</li>
              <li>250 gms curd</li>
              <li>4 tbsp clarified butter</li>
              <li>750 gms semi cooked rice</li>
              <li>1 tsp saffron</li>
              <li>1/2 cup water</li>
              <li>1/2 cup oil</li>
              <li>Garnish ingredients:</li>
              <li>Eggs, boiled</li>
              <li>Carrots, sliced</li>
              <li>Cucumbers</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <p>
              <strong>
                {" "}
                <h2>"Sticky Rice or "Bora Saul" Recipe :</h2>
              </strong>
              <hr></hr>
              <p>
                Sticky Rice or "Bora Saul" is one of the staple ingredients in
                Assamese delicacies like pitha and a lot more. Rice pudding or
                "Payokh" is served in every Assamese household during or
                parties, as a dessert. Sticky Rice pudding, however, is the
                incorporation of two favorite dish of Assam into one single
                dish. The stickiness of the rice, blended with the creaminess of
                milk and the sweetness of jaggery. Pair this dish with puri or
                serve this with dessert, you will thoroughly enjoy this
                scrumptious dish.
              </p>
            </p>
            <h2>Ingredients of Sticky Rice Pudding :</h2>
            <hr></hr>
            <ul className="list">
              <li>25 grams rice</li>
              <li>1 and 1/2 tablespoon ghee</li>
              <li>2 green cardamom</li>
              <li>50 grams jaggery</li>
              <li>1 litre milk</li>
              <li>1 bay leaf</li>
              <li>1 tablespoon sugar</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <p>
              <strong>
                <h2>Butter Chicken Recipe :</h2>
              </strong>
              <hr></hr>
              The name alone can make you want to enjoy this all the time
              favourite Indian dish. Butter chicken continues to be a hit among
              Indians and foreigners alike, specially those who want a taste of
              authentic Indian cuisine. There are many versions of how this dish
              was created and most historians agree that the iconic Butter
              Chicken was invented in the kitchens of Moti Mahal. This recipe of
              Butter Chicken is easy to follow and droolworthy!
            </p>
            <strong>
              <h2>
                Ingredients of Butter Chicken Recipe | Restaurant Style Butter
                Chicken Recipe :
              </h2>
            </strong>
            <hr></hr>
            <ul className="list">
              <li>400 gms raw chicken</li>
              <li>2 tsp red chilli powder</li>
              <li>2 tsp ginger and garlic paste</li>
              <li>2 tsp salt</li>
              <li>2 tsp lemon juice</li>
              <li>1/2 cup curd</li>
              <li>1/2 tsp garam masala</li>
              <li>1 tsp kasuri methi</li>
              <li>2 tsp mustard oil</li>
              <li>2 tsp oil</li>
              <li>2 to taste butter cubes</li>
              <li>3 gram cloves</li>
              <li>1 Cinnamon sticks, sliced</li>
              <li>1 tsp mace</li>
              <li>1 tsp kasuri methi</li>
              <li>4 Tomatoes, chopped</li>
              <li>1 1/2 tsp red chilli powder</li>
              <li>1 green chilli</li>
              <li>2 tsp cardamom powder</li>
              <li>1 tbsp cream</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <p>
              <strong>
                <h2> Chicken stew (chicken ishtu) Recipe :</h2>
              </strong>
              <hr></hr>
              Chicken stew (chicken ishtu) is a Kerala-style coconut rich curry
              recipe that makes for a good side dish with Appam. Chicken and
              potatoes simmered in coconut milk served with Appam, a rice
              pancake.
            </p>
            <strong>
              <h2> Ingredients of Chicken Stew and Appam : </h2>
            </strong>
            <hr></hr>
            <ul className="list">
              <li>1/2 kg chicken</li>
              <li>4 tbsp coconut oil</li>
              <li>2 onions, finely chopped</li>
              <li>1 red chilli, chopped</li>
              <li>2 Green chillies</li>
              <li>1 tbsp ginger-garlic paste</li>
              <li>2 tomatoes, chopped</li>
              <li>2 potatoes (diced)</li>
              <li>Coconut milk</li>
              <li>Salt</li>
              <li>Pepper</li>
              <li>1 Lemon</li>
              <li>1 bunch coriander, small</li>
              <li>1 cup rice, soaked</li>
              <li>3 tbsp coconut, grated</li>
              <li>1 tbsp rice (cooked)</li>
              <li>1/2 tsp salt</li>
              <li>1 tbsp sugar</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <p>
              <strong>
                <h2> Palak Paneer Recipe :</h2>
              </strong>
              <hr></hr>
              Cottage cheese bits in warm pureed spinach curry makes for this
              delicious dish called Palak Paneer. One of the most popular North
              Indian dish that goes well with just anything from roti, naan or
              parantha to even rice.
            </p>
            <strong>
              <h2> Ingredients of Palak Paneer :</h2>
            </strong>
            <hr></hr>
            <ul className="list">
              <li>500 gms spinach, pureed</li>
              <li>15-16 Paneer cubes</li>
              <li>2 tbsp oil</li>
              <li>1 tsp cumin seeds</li>
              <li>1 Bay leaf</li>
              <li>1 tsp ginger, finely chopped</li>
              <li>1 tsp garlic, finely chopped</li>
              <li>1 cup onion paste (boiled)</li>
              <li>1/2 cup tomato, pureed</li>
              <li>2 tsp salt</li>
              <li>1/2 tsp garam masala</li>
              <li>1/2 tsp red pepper, powdered</li>
              <li>1/2 tsp coriander powder</li>
              <li>2 black cardamom (crushed)</li>
              <li>1 tbsp cream</li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PageSideBar;
