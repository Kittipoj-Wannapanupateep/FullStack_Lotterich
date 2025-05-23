import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/common/ProtectedRoute'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AuthenticatedHome from './pages/AuthenticatedHome'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import CollectionPage from './pages/CollectionPage'
import OverviewPage from './pages/OverviewPage'
import StatisticsPage from './pages/StatisticsPage'
import ManagePage from './pages/ManagePage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
    <AuthProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/statistics" element={<StatisticsPage/>} />
            <Route element={<ProtectedRoute role="admin" />}>
              <Route path="/admin/manage" element={<ManagePage />} />
            </Route>
            <Route element={<ProtectedRoute role="user" />}>
              <Route path="/home" element={<AuthenticatedHome />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/overview" element={<OverviewPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
              <Route path="/delete-account" element={<DeleteAccountPage />} />
            </Route>
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </AuthProvider>
  )
}

export default App