import { Box, makeStyles, Button } from '@material-ui/core';
import React, { Fragment, memo, useCallback } from 'react';
import iconStarFull from '../../assets/img/iconStarFull.svg';
import iconStarMid from '../../assets/img/iconStarMid.svg';
import onePerTwoIcon from '../../assets/img/onePerTwoIcon.svg';
import play_videoIcon from '../../assets/img/play_videoIcon.svg';
import CircularProgressCustom from '../CircularProgressCustom';
const useStyles = makeStyles((theme) => ({
    divImg: {
        position: 'relative',
        width: '100%',
        '&:hover $bgDivImg': {
            opacity: 1,
        },
    },

    img: {
        width: '100%',
        height: theme.spacing(31.8),
        borderRadius: theme.spacing(0.5),
        [theme.breakpoints.down(`${460}`)]: {
            height: theme.spacing(24.5),
            borderRadius: '10px',
            boxShadow: '0 0 6px 2px #9e9e9e85',
        },
        [theme.breakpoints.down(`${321}`)]: {
            height: theme.spacing(20),
        },
    },
    groupRating: {
        position: 'absolute',
        top: 0,
        right: 0,
        [theme.breakpoints.down(`${460}`)]: {
            '& $rating': {
                display: 'none',
            },
        }
    },
    CircularProgressCustomdiv: {
        display: 'none',
        [theme.breakpoints.down(`${460}`)]: {
            display: 'block',
            margin: '5px',
        }
    },
    rating: {
        background: '#2b3a51d1',
        margin: theme.spacing(1.5),
        textAlign: 'center',
        padding: theme.spacing(.4, .8),
        borderRadius: theme.spacing(0.5),
        height: theme.spacing(4.1),
        width: theme.spacing(5.5),
    },
    point: {
        margin: 0,
        textAlign: 'center',
        fontSize: '16px',
        color: '#fff',
        marginBottom: theme.spacing(.4),
        letterSpacing: theme.spacing(.1),
    },
    ratingStar: {
        display: 'flex',
        justifyContent: 'center',
    },
    starIcon: {
        width: theme.spacing(1),
        height: 'auto',
    },
    bgDivImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        transition: 'all 0.3s',
        borderRadius: theme.spacing(0.5),
        backgroundImage: 'linear-gradient(transparent, #000000ad)',
        [theme.breakpoints.down(`${960}`)]: {
            display: 'none',
        },
    },
    ngayKhoiChieu: {
        display: 'none',
        [theme.breakpoints.down(`${460}`)]: {
            display: 'block',
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            color: '#fff',
            background: '#31434cb8',
            padding: '5px 3px',
            borderRadius: '4px',
            fontSize: '14px',
            lineHeight: '1',
            fontWeight: '400',
            fontFamily: 'SF Medium',
        }
    },
    bgDetail: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        [theme.breakpoints.up(`${960}`)]: {
            display: 'none',
        }
    },
    play_videoIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: ' translate(-50%, -50%)',
        transition: 'all 0.3s',
        zIndex: '5',
        width: theme.spacing(7),
        minWidth: theme.spacing(1),
        height: theme.spacing(7),
        borderRadius: '50%',
        background: '#312f2fa3',
        '&:hover': {
            opacity: '0.7',
            background: '#312f2f33',
        },
        [theme.breakpoints.down(`${460}`)]: {
            display: 'none',
        }
    },
    videoIcon: {
        width: theme.spacing(7),
        border: '2px solid #fff',
        borderRadius: '50%',
    },
}));
const ImageMovie = (props) => {
    console.log("props img",props);
    const classes = useStyles();
    const renderRating = useCallback(() => {
        let danhGia = props.danhGia;
        let times = danhGia % 2 > 0 ? (danhGia / 2 + 0.5) : danhGia / 2;
        let value = danhGia / 2;
        let listRaiting = [];
        for (let i = 1; i <= times; i++) {
            if (value === 0.5) {
                listRaiting.push(iconStarMid);
            } else {
                listRaiting.push(iconStarFull);
            }
            value = value - 1;
        }
        return listRaiting.map((item, index) => {
            return (
                <img src={item} alt={item} className={classes.starIcon} key={index} />
            )
        })

    }, [props.danhGia]);
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${d.getDate() > 10 ? d.getDate() : ('0' + d.getDate())}/${(d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}`;
        return date;
    }, []);
    return (
        <Fragment>
            <div className={classes.divImg}>
                <img src={props.hinhAnh} alt="img movie" className={classes.img} />
                <div className={classes.groupRating}>
                    <div className={classes.rating}>
                        <p className={classes.point}>{props.danhGia / 2}</p>
                        <div className={classes.ratingStar}>
                            {renderRating()}
                            <img src={onePerTwoIcon} alt="onePerTwo" className={classes.starIcon} />
                        </div>

                    </div>
                    <div className={classes.CircularProgressCustomdiv}>
                        <CircularProgressCustom value={(props.danhGia / 10) * 100} size={30} thickness={2} fontsizelabel={14} colorbottom="#fff" colortop='rgb(169 255 68)' colorbg='#2b3a51d1' />
                    </div>

                </div>
                <div className={classes.bgDetail} onClick={props.handleClickChooseMovie}></div>
                <div className={classes.bgDivImg} >
                    <Button variant="contained" color="inherit" className={classes.play_videoIcon}
                        onClick={props.handleShowModalVideo}
                    >
                        <img src={play_videoIcon} alt="play_videoIcon" className={classes.videoIcon} />

                    </Button>
                </div>
                <div className={classes.ngayKhoiChieu}>{changeFormatDate(props.ngayKhoiChieu)}</div>
            </div>
        </Fragment>
    );
};

export default memo(ImageMovie);