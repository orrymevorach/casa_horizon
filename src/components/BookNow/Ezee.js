import React, {useEffect} from 'react';
import classnames from 'classnames';

export default function Ezee({ isBelowHeader, isNavShowing }) {
  const showEzee = isBelowHeader && !isNavShowing;
  useEffect(() => {
    jQuery("#bb_resBookingBox").bb_resBookingBox({
			btnContainer: "bb_resBookingBox",
			headerColor: "#56c5d0",
			bodyColor: "rgba(0, 0, 0, 0)",
			showborder: false,
			BorderColor: "rgba(0, 0, 0, 0)",
			BorderWidth: 2,
			BorderType: "solid",
			FontFamily: "Arial, Helvetica, sans-serif",
			BodyLanguage: "en",
			FontSize: "16",
			TextColor: "black",
			InputBorderColor: "#fff",
			InputbackColor: "#fff",
			InputTextColor: "#000",
			ButnBackColor: "#fce6da",
			ButnBorderColor: "#fce6da",
			ButnTextColor: "black",
			HeaderTextColor: "#000000",
			HeaderFontSize: "15",
			ShowHeader: "0",
			boxwidth: "1000",
			boxwidthtype: "TYPE_PER",
			ShowInlineCSS: "1",
			type: "htype",
			acr: true,
			ShowChild: true,
			rooms: true,
			promotion: false,
			defaultadult: 10,
			defaultchild: 10,
			defaultroom: 16,
			ShowNights: true,
			Nonights: 15,
			HTextCaption: "Reservation",
			BtnTextCaption: "Book Now",
			LblPromoCaption: "Promotion",
			LblChkOutCaption: "Check Out",
			Calinit: true,
			CalShowOn: "both",
			CalDefaultDt: "+0w",
			CalChangeMonth: true,
			CalMinDate: "0",
			CalMaxDate: "",
			CalDtFormat: "dd-mm-yy",
			CalCutoffDays: "1",
			CalImage: "1px -24px",
			CalBackColor: "#a0f2ea",
			CalHeaderColor: "#fff",
			CalCellActiveColor: "#101414",
			CalCellInActiveColor: "#c8dbda",
			LblArrivalCaption: "Check In",
			LblNightsCaption: "Nights",
			LblAdultsCaption: "Adult",
			LblChildsCaption: "Child",
			LblRoomsCaption: "Rooms",
			LblPerRoomCaption: "Per Room",
			HotelId: "casahorizon",
        });
  }, [])
  return (
    <div
      className={classnames('bewarp', {
        'fadeIn show': showEzee,
      })}
      style={{ display: showEzee ? 'block' : 'none' }}>
      <form
        name='_resBBBox'
        action='https://live.ipms247.com/booking/book-rooms-casahorizon'
        target='_blank'
        method='post'
        style={{ margin: '0px' }}>
        <div className='bb_resbox' id='bb_resBookingBox'></div>
      </form>
    </div>
  );
}
