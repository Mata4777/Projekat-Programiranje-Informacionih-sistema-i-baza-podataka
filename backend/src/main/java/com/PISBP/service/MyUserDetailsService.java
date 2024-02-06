package com.PISBP.service;

import com.PISBP.MyUserDetails;
import com.PISBP.entity.User;
import com.PISBP.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class MyUserDetailsService implements UserDetailsService {
    BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();

    @Autowired
    UserRepository userRepository;

    MyUserDetailsService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public synchronized UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(username);
        user.orElseThrow(()-> new UsernameNotFoundException("Not found: "+username));
        return user.map(MyUserDetails::new).get();
    }

    public ResponseEntity<String> addUser(String userName, String password) {
        if (userName==""||password.length()<5){
            return ResponseEntity.ok().body("Bad username or password");
        }
        Optional<User> user=userRepository.findByUserName(userName);

        if(user.isEmpty()) {
            this.userRepository.save(new User(userName, bCryptPasswordEncoder.encode(password), true, "ROLE_STAFF"));
            return ResponseEntity.ok().body("You successfully registered");
        }else{
            return ResponseEntity.ok().body("Username already taken");
        }
    }
}
