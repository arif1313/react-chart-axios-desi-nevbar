import Price from "../Price/Price";



const Prices = () => {

    const rate =[
        {
          "id": 1,
          "name": "EduPro Tutoring Center",
          "features": [
            "Certified and experienced tutors",
            "Individualized lesson plans",
            "Flexible scheduling",
            "Online and in-person classes",
            "asjolhdfhosn"
         
          
          ],
          "price": 30
        },
        {
          "id": 2,
          "name": "Math Wizards Academy",
          "features": [
            "Expert math tutors",
            "Small group classes",
            "Advanced problem-solving techniques",
            "Parent-teacher conferences",
            "Homework help"
          ],
          "price": 40
        },
        {
          "id": 3,
          "name": "Language Learning Hub",
          "features": [
            "Language immersion programs",
            "Native-speaking instructors",
            "Customized learning paths",
            "Cultural exchange events",
            "Online language labs"
          ],
          "price": 35
        },
        {
          "id": 4,
          "name": "Science Explorers Institute",
          "features": [
            "Interactive science experiments",
            "STEM-focused curriculum",
            "Hands-on learning",
            "Science fair competitions",
            "Field trips to museums"
          ],
          "price": 45
        },
        {
          "id": 5,
          "name": "Test Prep Masters",
          "features": [
            "SAT and ACT prep courses",
            "Experienced test prep coaches",
            "Full-length practice tests",
            "College admissions guidance",
            "Score improvement guarantee",
            
          
          ],
          "price": 50
        }
      ]
      
    return (
        <div className="grid grid-cols-2 gap-7 p-7">
            {
                rate.map(price=><Price key={price.id} value={price}></Price>)
            }
        </div>
    );
};

export default Prices;