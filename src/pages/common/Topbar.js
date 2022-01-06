import React from 'react'
import "../../assets/css/main.css"

export default function Topbar() {
    return (
        <>
            <input type="checkbox" class="checkbox" id="click" hidden />
            <header class="topbar">
                <div class="navbar-header">
                    <label for="click">
                        <div class="menu-icon">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </label>
                </div>
            </header>
        </>
    )
}
