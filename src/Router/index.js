import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Homepage from '../Components/Homepage';
import Signin from '../Components/Signin';
import Navigation from '../Components/Navigation';
import RegisterCandidate from '../Components/RegisterCandidate';
import RegisterRecruiter from '../Components/RegisterRecruiter';
import Recruiter from '../Components/Recruiter';
import Singleuser from '../Components/Singleuser';
import ADMIN from '../Components/ADMIN';
import Viewallusers from '../Components/viewallusers';
import SINGLEJOB from '../Components/SINGLEJOB';
import VIEWALLUSERS from '../Components/VIEWALLUSERS';
import Recruiter_1 from '../Components/Recruiter_1';
import Recruiter_2 from '../Components/Recruiter_2';
import Recruiter_3 from '../Components/Recruiter_3';
import JobCreation from '../Components/JobCreation';
import JobCreation_1 from '../Components/JobCreation_1';
import JobCreation_2 from '../Components/JobCreation_2';
import EditProfile from '../Components/EditProfile';
import Candidatejobs from '../Components/Candidatejobs';
import ApplyJob from '../Components/ApplyJob';
import ApplyJob2 from '../Components/ApplyJob2';
import JobDetail from '../Components/JobDetail';
import EditProfile_1 from '../Components/EditProfile_1';
import Singleuser_1 from '../Components/Singleuser_1';
import Fisearch from '../Components/fisearch';
import Fimappin from '../Components/fimappin';
import ImageContainer from '../Components/ImageContainer';
import ImageContainer_1 from '../Components/ImageContainer_1';
import Gallery from '../Components/Gallery';
import Container1 from '../Components/Container1';
import Property1Full from '../Components/Property1Full';
import MapPin from '../Components/MapPin';
import CompanyGoogle from '../Components/CompanyGoogle';
import EmployersGoogleSizeMedium from '../Components/EmployersGoogleSizeMedium';
import Property1Intern from '../Components/Property1Intern';
import Fiarrowright from '../Components/fiarrowright';
import Logo from '../Components/Logo';
import PhoneCall from '../Components/PhoneCall';
import Fichevrondown from '../Components/fichevrondown';
import CaretDown from '../Components/CaretDown';
import BookmarkSimple from '../Components/BookmarkSimple';
import Breadcrumb from '../Components/Breadcrumb';
import Fiarrowright_1 from '../Components/fiarrowright_1';
import StatusFalsePositionPrimaryCircleTrue from '../Components/StatusFalsePositionPrimaryCircleTrue';
import Property1Active from '../Components/Property1Active';
import Property1Normal from '../Components/Property1Normal';
import Property1Hover from '../Components/Property1Hover';
import Pagination from '../Components/Pagination';
import CalendarBlank from '../Components/CalendarBlank';
import Timer from '../Components/Timer';
import Stack from '../Components/Stack';
import Wallet from '../Components/Wallet';
import Briefcase from '../Components/briefcase';
import LinkSimple from '../Components/LinkSimple';
import PlatformTwitterColorBrandStateDefault from '../Components/PlatformTwitterColorBrandStateDefault';
import Envelope from '../Components/Envelope';
import BookmarkSimple_1 from '../Components/BookmarkSimple_1';
import StatusFalsePositionPrimaryCircleFalse from '../Components/StatusFalsePositionPrimaryCircleFalse';
import Fiarrowright_2 from '../Components/fiarrowright_2';
import SizeLargePositionPrimaryIconRightStatusNormal from '../Components/SizeLargePositionPrimaryIconRightStatusNormal';
import PositionPrimary from '../Components/PositionPrimary';
import MapTrifold from '../Components/MapTrifold';
import Breadcrumb_1 from '../Components/Breadcrumb_1';
import ContainerContainer2 from '../Components/ContainerContainer2';
import ContainerContainer3 from '../Components/ContainerContainer3';
import ContainerContainer4 from '../Components/ContainerContainer4';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/homepage"><Homepage /></Route>
				<Route exact path="/signin"><Signin /></Route>
				<Route exact path="/navigation"><Navigation /></Route>
				<Route exact path="/registercandidate"><RegisterCandidate /></Route>
				<Route exact path="/registerrecruiter"><RegisterRecruiter /></Route>
				<Route exact path="/recruiter"><Recruiter /></Route>
				<Route exact path="/singleuser"><Singleuser /></Route>
				<Route exact path="/admin"><ADMIN /></Route>
				<Route exact path="/viewallusers"><Viewallusers /></Route>
				<Route exact path="/singlejob"><SINGLEJOB /></Route>
				<Route exact path="/viewallusers"><VIEWALLUSERS /></Route>
				<Route exact path="/recruiter_1"><Recruiter_1 /></Route>
				<Route exact path="/recruiter_2"><Recruiter_2 /></Route>
				<Route exact path="/recruiter_3"><Recruiter_3 /></Route>
				<Route exact path="/jobcreation"><JobCreation /></Route>
				<Route exact path="/jobcreation_1"><JobCreation_1 /></Route>
				<Route exact path="/jobcreation_2"><JobCreation_2 /></Route>
				<Route exact path="/editprofile"><EditProfile /></Route>
				<Route exact path="/candidatejobs"><Candidatejobs /></Route>
				<Route exact path="/applyjob"><ApplyJob /></Route>
				<Route exact path="/applyjob2"><ApplyJob2 /></Route>
				<Route exact path="/jobdetail"><JobDetail /></Route>
				<Route exact path="/editprofile_1"><EditProfile_1 /></Route>
				<Route exact path="/singleuser_1"><Singleuser_1 /></Route>
				<Route exact path="/fisearch"><Fisearch /></Route>
				<Route exact path="/fimappin"><Fimappin /></Route>
				<Route exact path="/imagecontainer"><ImageContainer /></Route>
				<Route exact path="/imagecontainer_1"><ImageContainer_1 /></Route>
				<Route exact path="/gallery"><Gallery /></Route>
				<Route exact path="/container1"><Container1 /></Route>
				<Route exact path="/property1full"><Property1Full /></Route>
				<Route exact path="/mappin"><MapPin /></Route>
				<Route exact path="/companygoogle"><CompanyGoogle /></Route>
				<Route exact path="/employersgooglesizemedium"><EmployersGoogleSizeMedium /></Route>
				<Route exact path="/property1intern"><Property1Intern /></Route>
				<Route exact path="/fiarrowright"><Fiarrowright /></Route>
				<Route exact path="/logo"><Logo /></Route>
				<Route exact path="/phonecall"><PhoneCall /></Route>
				<Route exact path="/fichevrondown"><Fichevrondown /></Route>
				<Route exact path="/caretdown"><CaretDown /></Route>
				<Route exact path="/bookmarksimple"><BookmarkSimple /></Route>
				<Route exact path="/breadcrumb"><Breadcrumb /></Route>
				<Route exact path="/fiarrowright_1"><Fiarrowright_1 /></Route>
				<Route exact path="/statusfalsepositionprimarycircletrue"><StatusFalsePositionPrimaryCircleTrue /></Route>
				<Route exact path="/property1active"><Property1Active /></Route>
				<Route exact path="/property1normal"><Property1Normal /></Route>
				<Route exact path="/property1hover"><Property1Hover /></Route>
				<Route exact path="/pagination"><Pagination /></Route>
				<Route exact path="/calendarblank"><CalendarBlank /></Route>
				<Route exact path="/timer"><Timer /></Route>
				<Route exact path="/stack"><Stack /></Route>
				<Route exact path="/wallet"><Wallet /></Route>
				<Route exact path="/briefcase"><Briefcase /></Route>
				<Route exact path="/linksimple"><LinkSimple /></Route>
				<Route exact path="/platformtwittercolorbrandstatedefault"><PlatformTwitterColorBrandStateDefault /></Route>
				<Route exact path="/envelope"><Envelope /></Route>
				<Route exact path="/bookmarksimple_1"><BookmarkSimple_1 /></Route>
				<Route exact path="/statusfalsepositionprimarycirclefalse"><StatusFalsePositionPrimaryCircleFalse /></Route>
				<Route exact path="/fiarrowright_2"><Fiarrowright_2 /></Route>
				<Route exact path="/sizelargepositionprimaryiconrightstatusnormal"><SizeLargePositionPrimaryIconRightStatusNormal /></Route>
				<Route exact path="/positionprimary"><PositionPrimary /></Route>
				<Route exact path="/maptrifold"><MapTrifold /></Route>
				<Route exact path="/breadcrumb_1"><Breadcrumb_1 /></Route>
				<Route exact path="/containercontainer2"><ContainerContainer2 /></Route>
				<Route exact path="/containercontainer3"><ContainerContainer3 /></Route>
				<Route exact path="/containercontainer4"><ContainerContainer4 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;