import React, {Fragment} from 'react'
import "../../assets/css/main.css"

export default function Sidebar() {
    return (
    <Fragment>
        <div class="sidebar">
            <div class="logo">
                <img src="../assets/img/logo/logo.png" class="logo-name" alt=""/>
            </div>

            <ul class="icons-list">
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar" value="Dashboard"><i class="fas fa-tachometer-alt"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-book"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-chart-bar"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-chess-knight"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-user-friends"></i></a>
                </li>
            </ul>
            <ul class="settings-list">
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-sign-out-alt"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mvcocktail/?hl=fr" class="icon-sidebar"><i class="fas fa-cog"></i></a>
                </li>
            </ul>
        </div>
    </Fragment>
    )
}
