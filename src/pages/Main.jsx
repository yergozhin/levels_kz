//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { addPage } from "../actions/Action";

export default function Home(){
    //const pages = useSelector((state) => state.pages);
    //const dispatch = useDispatch();
    //const navigateTo = useNavigate();

    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [experience, setExperience] = useState("")
    const [annualSalary, setAnnualSalary] = useState("")
    const [date, setDate] = useState("")
    const [specialization, setSpecialization] = useState("")
    
    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    }
    const handleLoctionChange = (event) => {
        setLocation(event.target.value);
    }
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    }
    const handleAnnualSalaryChange = (event) => {
        setAnnualSalary(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleSpecializationChange = (event) => {
        setSpecialization(event.target.value);
    }
    return (
        <div className="navigation-menu">
            <div className="table-menu">
                <input value={company} onChange={handleCompanyChange} type="text" name="company" placeholder="Company Name"/>
                <input value={location} onChange={handleLoctionChange} type="text" name="location" placeholder="Location"/>
                <input value={experience} onChange={handleExperienceChange} type="text" name="experience" placeholder="Experience"/>
                <input value={annualSalary} onChange={handleAnnualSalaryChange} type="text" name="annualSalary" placeholder="Annual Salary"/>
                <input value={date} onChange={handleDateChange} type="text" name="date" placeholder="Date"/>
    <input value={specialization} onChange={handleSpecializationChange} type="text" name="specialization" placeholder="Specialization"/>
                <table>
                    <tr> 
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                        <td>Column 4</td>
                        <td>Column 5</td>
                        <td>Column 6</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}