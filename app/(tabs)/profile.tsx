import CustomHeader from '@/components/CustomHeader';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <CustomHeader title="Profile"/>
        <View style={styles.menuContainerWrapper}>
          <View style={styles.profileContainer}>
              <Image
              source={require('@/assets/images/profile_image.png')} // Replace with actual image URL
              style={styles.profileImage}
              />
          </View>

          <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.editButton}>
                <Image
                source={require('@/assets/images/edit_button.png')} // Replace with actual image URL
                />
              </TouchableOpacity>
              <Text style={styles.nameText}>Name Here</Text>
              <Text style={styles.tagLine}>Tag Line</Text>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.aboutMe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor.
              </Text>
              <Text style={styles.sectionTitle}>My Skills</Text>
              <View style={styles.skillsContainer}>
                {['UI/UX', 'Website Design', 'Figma', 'Animation', 'User Persona', 'XD'].map((skill, index) => (
                  <View key={index} style={styles.skillPill}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
          </View>
        </View>

        <View style={styles.coursesContainer}>
          <View style={styles.coursesHeader}>
            <Text style={styles.coursesTitle}>Enrolled Courses</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERUSExIWFhUXGB0VGBgYGBkZGBkYGhgbGBkfFh0YHikgGholGxcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUvLS8tLS0tLS0tLS0tLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABMEAACAQMCAgUGCQkGBQQDAAABAgMABBESIQUxBgcTQVEiMmFxgZEUIzRScqGxs9EWM0JUkpOywdIVFzVigvAkU3N04UNEwvFjZKL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADwRAAIBAgMDBwoGAgIDAAAAAAABAgMRBBIxIUFRBRMyYXGRsQYiMzRSgaHB4fAUFSNTktEWcmLxQnOy/9oADAMBAAIRAxEAPwDy+ukVCgCgCgCgCgOkQkgAEknAA3JJ2AHpqG1FXeiCV9iNjZ9XczIGkmSNj+jpL49ZDAZ9WfXXmK3lTQhNxpwclxvb4WZ0YcmzavJ2+I//AHbP+tL+6P8AXWL/ACyn+0/5fQt+Vy9r4fUP7tn/AFpf3R/rp/llP9p/y+g/K5e38PqH92z/AK0v7o/10/yyn+0/5fQflcvb+H1D+7Z/1pf3R/rp/llP9p/y+g/K5e38PqH92z/rS/uj/XT/ACyn+0/5fQflcvb+H1D+7Z/1pf3R/rp/llP9p/y+g/K5e18PqH92z/rS/uj/AF0/yyn+0/5L+h+Vy9r4fUzHHuBS2jhZACD5rr5rY+w+iu9gOUaONhmp6rVPVffE0q9CdF2l3lZW+YQoAoAoAFQ3ZXBPVe6vMSbnK73m9ayFIqrVmEJUEhQDgj25isqppq9ymbboL2X+YVPNL2kM3UIY/SKh09l7oZuobrEXCgFAqUiBCKlNxd0NUQWG9enhLNFPiaLVmJVgFAFAFAFAFAFAFAFAFAFAaLoBEGvo8jOlWYesLgfbXF8oJyjgJ232XuubeBSddX6z10EaT45+r8a+eLJkfG/w++J3ne/UcViLC0BKVocDIfOBnGNzvnmfVW/GWEyrMpX2Xtbbx1ZgarXdmhcweEn1VN8Fwl8CLVuojS6c+TnG3PGc9/L01p1cmb9O9uszRzW844rGWO1x359mPR/5+qskclvOv7vvtKu+4y/WJEDYuSN1ZGHoJYKfqY12vJubjjklo0791/kafKCTot8GjyivohwgoAoAoAXnVJ9Fhak+vMG8FCQqAFAFAFAFAFAFATYuEzsAywuQRkEDYitqODryWaMHZ9Roz5SwlOThOrFNaq53/Ylz/wAiT9k1P4HEew+4j80wX7se9ERuj91k/wDDy8/mmu/TpTUEmtyNR8oYW7/Uj3ifk9d/q0v7Jq/Ny4D8dhv3F3h+T13+rS/sGnNy4E/jcP7a7yFdWrxtokQo3PDDBweVVaa1M8KkZrNB3QzQuFAFAFAFAFAFAFAaXq8+XL9B/sFcLyi9Ql2x8TcwHpl2M9VBr540d46FQSFQAoBuS4RSFZ1BPIEgE+rPOskaVSabjFtLgirlFOzY5WMsFAFAZ3rA+QS+tPvFrueTvr8eyXgzTx/oH7vE8lr6McAKAKADUARTVZdFkon15g3RaAKgkKACamwGp5tKlhvirwpuUlF7yJtxVyJHxVe9SPVvWzLByWjMKrLeTYplYZU5rVnTlB2kjKpJ6HdULGrkYhIMEj4hORPpr00W1Sp/6o4OEpxc6zaXpJfIQ6vnN7zTM+JtuFNapdyIc7uP0m95qMz4kqnT4LuRW3Ez/Pb9o/jUZnxJ5qHsruRWXVxJv8Y/7bfjUOT4k81D2V3IselZ+Oj/AOhF/BW3Pd2I08Bspv8A2l4lNVDdCgCgCgCgCgCgCgNH1fn/AI1foP8AZXD8ofUZdq8TcwHpl2M9UU189aO6OCqEkW74gqbc28PD1mtqhg51dr2I2aWHlPboiv8Ah8z+aP2Rn7a3vwuHprzviza/D0YdL4sy/T6wnkMLCJ3CxnUQucEsdiB6AK7nIOJw9JVI50ry2K9tlus8zyvScqt4K8Vw2md4Vxu5tz8U7YHNGyyeog8vZg128Tybh8XH9SF+ta96+d0cyliKtLov3bj0fox0njuxpI0SgZKZ2I8UPePRzH114flTkipgnmXnQej4dT+9vwO3hcZGtsex8P6L6uObhnesD5BL60+8Wu55O+vx7JeDNPH+gfu8TyWvoxwAoAoBDUARarLoslE8V5k3RRUAUmliRh5vCs0afEyxhxOAhNXcoos5JCy25KMuRk/jURqpTUuBgq+erIq5bJ15jI9G9b9OtCbstTTdOSGwrL5QyPTWadJ285bCu1bS1sb3Xsdm+2uXXw+TatDZp1M2xm0uGwlv/wBBP51216On/qjk4Tp1v/ZL5FxweYrBK45ruPdW3h5ONOTRy+VaEa2Mowno/wCzkzfCLaYyKNUYLKwGNwCf5Y9tTn52nLNqiHh1gcXTjRbtLY0+2xTRdHWdA7SxxhvN1nc1gjQbV20jo1eUYQm4Ri5W1tuMtxOAozocEqSpI5bHG3orBJWdjfpzU4qS3k7pX+ej/wC3h/gFbU93YjUwPo5f7S8SmqpuBQBQBQBQBQBQBQGi6A/LV+g32VxPKD1GXavE28D6ZdjPU0NfPpHeRH4ld6FwPOP1DxrYwmHVSV5aI2sNRzu70QnAuCtMw2znfB5Y8W9FdH9WvU5mhrvfAvjMbGirL76kbuz6NxKPKyx/ZX2AV1qHIWHir1byfbbw/s81V5Qqyfm7Pix6bgUBHmY9IJ/HFZ6nI2EmrZLdjZjjjayep5JdRrrnEpZZAxCgAbkHGG9mPZv6D9DwWHjhsPSpYdLIkv8Avtb2vrME5ucnJ7zBcSJhui0eUZSHUjbBIB29G59HMVwsfTo1Jzpqzi9jW7rXufcYryhO62PU9X6P8UFzbpKNidmHgw2YervHoIr5Vyhg3hK8qT03Pit316z0eHrKrTU/u5W9YHyCX1p94tb/AJO+vx7JeDMWP9A/d4nktfRjgBQBQCNUMHK86rLoslE8V5k3ToVAGJnztWenGyuZoRttHba3JPp+ynnTeWJSpUsWUdqo571tQw8I67TUdRvQc7MeA91ZckeBTM+JXcWjAAIHfv8AyrPhaUIzcktpLk3sZXyBcDGc99bqvtvoQVOcHI2wdq0Wk9m4roeg3M+Y7Unvtoz/ABVsyVoQX/FGlg9sqr/5y+Re9HpwLadioYDcqeR25Gtmg7U5N7Tn8p03PFUoxdnx4bSu4jx0vH2aIsaHmF7/AG4G3srFOu5RypWRuYfk6NOpzs5OcuL+2SLK7huVjtbhGWQDEbjY4xt6th3gg4rJCUaiVOeu4wVqNXDSliKLvFvavf8A370Y7jdr2MskROdBIz4+H1VqzjlbR1KNTnIRnxJXSv8APR/9vD/AK2Z7uxGtgvRv/aXiU1VNwKAKAKAKAKAKAKA0XQL5Yv0G+yuL5QepS7V4m3gfTLsZ6ilfPpHdRUy/GT47s49g5/zrqw/Rw1+q/vZ1Ifp0b/e09O6N2YSFWxu/lH1foj3faa7/ACRhlSw6lvltfy+B5HG1XOq1uWz+xxeP2xUOJk0l+yBzsXHcPYM55Y3rqmmE3HLZXMbTKHBVSp5guSFz6CVbflsaAhf2Za3XxyiKUZK6wAwJVipGe/BBHsrahi6kI5VJpdpKZ5L1r8FERVwN0bsyfFGGpM+r/wCRrzvI83RxdXCt7OkvvrTXcb2NSqUoVl2P77SJ1X3R1TRdxAkHr81vq0+6sHlRRWWnV37V818y3Jc9soe8vesD5BL60+8WuV5O+vx7JeDNzH+gfu8TyWvoxwAoAoBG5VAOVqkuiyUTxXmzdB2wKmKu7ExV2MQrvWWo7IzTdkXdvHpX099bdKGSNjnzldjlZSgtANyx5GDVouwIbWC4OBv7aV5ynBq5aDszP8Th0vkcm39vfWDCzzQs9xNWNmaq+kxHaf8Aax//ACrp1NI9iOdgtav+8vkOWnF3SN4lxpk87I35Y232qI1HGLit5mqYaFSpGo9Y6ENpaoZy1j6YXCIEXs/JAUMVOoADA78fVWdYmaVkaEuTaMpOTvt267PAy19cFizMSWYkknmSa1277Wb8YqKSWhbdK/zsf/bw/wAArbnu7EaeC6D/ANpeJTVU2woAoAoAoAoAoAoDQ9Avli/Qb7K4vlB6lLtXibeB9MuxnqSV8/kd1FTb7Tn1t/OupW87DbOCOpU20Pcj1rhbgwxkfMX7BXrMJJSoQa4LwPFV1apJdbM+3Ru2ClOwnIE5uM6ifjMadQJbw7+e2ee9bBiH5OFRN5yXLESI5YsSXMKhULb4ZfJ16SMajqxnegLfhdskaEIrKGkkkIbOdUkjSOd+4sxIHpoDyzrmnGlx4vGo9YXJ+yuNhvO5Xk1ujt7l/Z0Kvm4JX3v5mP6s0PwmQ9wiIPtZcfYat5TySwsV/wAvkynJi/Vb6vmjUdYHyCX1p94tcLyd9fj2S8GdDH+gfu8TyWvoxwAoAoBG5VDBytUl0WStSeK82bpxNyq9PpF4ahaDf2iry2ySJql5XQOeViWkmJRnziCPKOeeT6ttuXo3FAOJbOQgb9AjJ1HJAGf4tt+4GgObe0cAZOCH1YDsRpxjG/M7d/eTQFjQGZ40Nh9IitbC7JyRmq6I0LW8c8dtpurdStukbK8mGDLknYA+NdeWVxi8yVktWcejUnSlOPNyd5Nqy3Cjgf8A+3a/vD/TVL0/3I95sfiJ/tT7vqcnhC/rlr+8P9NZVRurqSK/in+3Pu+o23Bgf/eWn70/005h8UPxT/bl3fUjy9Hgf/e2n70/005h8UT+Kf7cu76jnSiRWmXQ6uFhjQspyuVXBwfXWSepGEjJU3mVtre0qKqbQUAUAUAUAUAUAUBoegXyxfoN9lcXyg9Sl2rxNvA+mXYz1Fa+fs7qKzibrGwfSSTy3woI/nXqfJ7kp8qKUJVFGMbXSV5NO/HYl17ewricfOjTUUtTY9DePKUETHGfMJ8TzU+nPL1+qtmgp4CvLA4jY0/Ne5p6W7fG61RzsVSVaKr0/ea8NXVuc2wuakgg8X4okCajux81e9j+Hia1MZjIYam5S13LiZ8Ph5VpWWm9nz51hcVaW47M58jLNkY1O+5I9AG2fSaw8hULU5YiTvKb+F/7+Rl5RqXmqS0j9/fvL3q24cUheYjeU4X6C5H1kt7q43lLilOtGjH/AMVt7X9LG3ybSywc3v8ABE7rA+QS+tPvFrV8nfX49kvBmbH+gfu8TyWvoxwAoAoBG5VDBytUl0WStSeK82bpzKNjVoO0i0dTiCr1HoXnYu43yAfGt+Msyuc9qzsIYh4n3mrECdiPE+80Aoi9Le80AsjgAnwqspZVcmKu7GW4tLuF8Nz7axYSLs5PeZKz2pHPB0zJ6h9Z/wBmpxb8y3ErRXnXLiuYbRBkO59deno+jj2I0ZasGGDgjB577VkIEzQBQBQBQBQBQBQBQBQBQGh6BfLF+g32VxfKD1KXavE28D6ZdjPUFr5+zvIauoQ6lT/9eqt3k3lCrgMRGvS1Wq3Nb0/vrIqUo1Y5ZFEyvC3oPuP4GvqKlyb5RYez6S/nF/NfB9unI/Wwc+r4Mv8Ah3TKWMY1ZHg41e4jeuNV5A5Ww2yhKNSO6+x/G3/0ZXUwlXbNOL6vv5Eufp3IRsVHqVif/wCtqxx5M5cqPLzcYdbkn4N+BGXBR23b++xGcv8AiskzHdiT3ndj6PQPQK7GB8nKGDf4vHTU5Lbd7Ix79eq+zquVqYtzXN0Y2XVqzt+j6TxBJxkjzSDhlHgG7x6K8dyvy7S/HSq4BWT6V9Jv2su7t1e82oYPNSUa2u7iuq5fwRKqhVACqAAByAGwAryVScpycpO7e1m6oqKstCh6wPkEvrT7xa7Pk76/Hsl4M1Mf6B+7xPJa+jHACgCgEblUMHK1SXRZK1J9ebN0KgEWYkN9ldzCwozo2S6nxME3JSPWOo+TMd+P8ke3slrWjSlSbjLTcKjUrNEvqkcG1vyDkdmm/wDolq6d9DG007M66Vf4FYeuP7p6kge6qrkx2t9KMZRQ4zyyqOd/RtUXAQ8TTjPDLx54ER4FYpKuQMiMuME7jlgjPIisV1VTVjLZwaNZHPMtladlPbQkwpq7dSwPxa+ZiRMY9tZVaxiZQ9DbuEXHENc9uL6Sb87pwjL2SBOzBfLKNLZUPnOT4VTPFtpalsrSuP8AF7e5HFOGvMkBXVIvaxAhmfsZCAwbJVdIJA1MNjvyqrTzK5ZWysi21nFDc8Y4o0Qllgc9mp7tFtHIdOx0ltWC2MgL663btqMfvUxDXSuC7vOCyy3EVmx7E3KOplDRoI+08kFT8ZjbOoA53GKQcYzVrjcXXSTo9BxDh8No7KszQCSAnzgyIgYjxXy1Vh4N44qkJuEsyBh+vtcPYg8xHKPrirNh9GGeVVsEBQBQBQBQBQBQBQGh6BfLF+g32VxfKD1KXavE28D6ZdjPUVr5+zvIUrVbl0MyJnYistKrOnJTg2mtGnZ95ZpNWZBk4ah7iPUa9NhvK/lKirSkpf7Lb3qxqTwFGW63YcrwpP8AMfb+ArZqeW3KElaMYL3P5souTaK1uTbe3VfNUCvOY7lTF413xE3Lq3L3LYbVOjTp9BWJcYrmNl2PCqFTPdYHyCX1p94tdvyd9fj2S8GaeP8AQP3eJ5LX0Y4AUAUAjcqhg5WqS6LJWpOrzZui1AOJEzWehXlRlmREoqSLfob0qm4bO0saq6uNLoxIDAHIwR5rDJ3weZ2rtxnTxEdj+hryi1qaTi/Wprt5ILWyjtRLkOysCTq2bAVFGojbUc1inhZW8xoRav5xU8X6cGewt7LstPYFT2mrJbSjL5ukYzqzzPKsLw9dqyt3llkvc76F9PjYJMhtxOJiM6pNIAAIIxpbIOqstLCSS89kTaehI6R9ZE11bNaQW0VrC4w4Q5JU8wMKoUHv2yatLmsP50n2IhRcmXEfWbGYYoZeGxTCJFQGRw3JQpIDRnGcVzXi9uhk5nrI/D+sKOMzq3DoGgmftOy2Gk6QuCdBVh5OR5Ixk1jWIW3YS6fWdXnWS7z2rpapHDbEskKtzJjaMZYKAAFY4AX/AMHidqsgqexlZY9ZE8N/c3SRKY7hgZIGYkeSoQFWxs23PHfjGwI7UYKdON+BrPYx/jvWX2lrLa2tjFapMGWQqQxIcYbAVFAJG2o5/CY0bO7dyLkTjvWHLM1k8UfYyWedLB9evKopDDSMKQhBG+QxqY0kr33i5F6e9MzxJoWMAi7JWGz69WsqfmjGNPp51NOGRMMytZAFAFAFAFAFAFAFAaHoF8sX6DfZXF8oPUpdq8TbwPpl2M9IueIRxFQ7YLnCjBOcYydu4ZGT6RXhaeHqVbuCvbU7UqkY2vvFl4rApcGQZjwHABYqWzjZQd9j7qiOErSUWo7JXtor27e0l1oK6vodRX8LlwsinQAzYOyhgSCTy5AmqSw9aFs0Wr7F1tF41YO9noMLxOA4xIDldYIDY0jIyTjYeS3PwrI8JXV7x0dt2uzZ8UFXg95ItJUkXUhyMkciNwcEEHcEGsVSnOnLLJbS8ZqSujoTLuN8jnsfwqObkRnR2LtPE+4/hUczP7aKuojoXqZxv+yfwpzE7fUjnEUvWB8gl9afeLXV8nfX49kvBmtj/QP3eJ5LX0Y4AUAUAjcqhg5WqS6LJWpOrzZui1AAihJYdH0tjcILwsLffWVyW806caQT52O6stJpSu3YiV7bD0XinQ7gUNtFdO9wIpsdmQ0hzqUuMqFyNh3iur+KlFbWa2Vt2Mv0n6I28HCbK7j19rPo7TLZXyoWc4HduopLGSjHNYsoXk0Wc/RDhsFpw26uDKEuEUzEMx3a3Mg0qoJA145d1RUxU7LbYKPnNLcXXFOinA7e2iunecRTAGJgXOdSaxkBcjYd4rWnCD86RMZTvZEC26HcPs7WGbiksnaTAERpq8nYEjCAsSARk5xk4HpxKlTivPLOcpO0Rb7q/gW6s2ilaWzum05z5S5RnXDAbggbbZGMGjoRzJrRkKo7PiXLdX3C5JpbSN7hJ0XUThygyFI8pk0N5y7A558sHF3QpvYiM8rXMXxDofDHwV71tRuUnaIkN5Hk3RhOF+iK6dKTuo9XyMD4l/0N6sLe44fHNcM6zzKzphsAKfzZ04320sfXUTrNSstBYz3Vx0Qhu2vUug4e2VQAracPmVXB23wYxWSrNxStvIRgomyoPiAayvUg6oSFAFAFAFAFAFAFAaHoF8sX6DfZXF8oPUpdq8TbwPpl2M9B4rwlbjRl2XQ2fJC57uRIJU7cxjvrxWGxbw+ayTut9/t9jOvVoqpbbod33BRKZGEsiGRURtOnzULnHlA89Zz6BVKONdJRTinlbavfV24NaW2Fp0VK7u1e3wv/AGPxcL0yCRZCCVRGGFwyxh8DYDTkyZOPmgDFY5YrNTySjvk1texyt36bO3aSqVpZk+Hwv/ZD/JpNSMJZFKAgEBNW5cg6tOdjIds4OBtzzn/M5WknFO/bbduvbdrrrtKfhldNN7Ozr/ssOFcOEEfZhi3lM2TgbsxY4CgADJ5CtXEYh1552rbEu5W37WZqcMkbIdML/wDMP7K1TPD2fiybPiI8DkYEpB8dK/7/APqpVSCfR+LIcZcR2BCBgsWPiQB9lY5yUndKxaKaW1lB1gfIJfWn3i12fJ31+PZLwZqY/wBA/d4nktfRjgBQBQCNyqGDlapLoslak8V5s3RagBQkQigN90x4tBJwfh8EcqNLHo1oDllxCynUO7c4rbqzTpoxxTztlpYX3D+IcLt7O5uhbSW+nziADoVkBBbZgVblnIP12jKNSFm7EPNGTaRWdZXHLV4LSxtH7VLZQDJzHkoI1AOMMcZJI25eyleomlFE007tsOmfFoJeD8PgjmRpI1jEiA5ZcQFTqHdg7VNWayKzEU1NsurriHDuL21v8Juha3EI0tkgA5ChtOvYglQRg5HfVrwqxV2UtKD2Dl30ss0uOH2lvJm3tnDPMx8nyYmRdyBnziSQMZIxR1IZlFbgouzbLpen0Est5bm7jhUKPg9wMY8qMavOyCyyZPq9Wavz0W2rlcjVmYu04haycCWwlu4llNz8Zl9wnwwsz5PMaMsD37Vv01JNSS3LwMctTV8R6xOFR3MCAPJ2QCxyxEGGMSeQwbyxkBQCfJOBy3qqpTsyLjHCuNcNh4jfzC+gEd1HEc6xgSDtVkA9O6t/rqXGbilbQHmPS7glhbLF8CvvhRJIcZQ6AANJ8kd+/PwrYjKb6SsQZqrgKAKAKAKAKAKAKA03Vzbl79VXmUfHsXP8q5vK2HliMLKEddjXuM+GqKnUUnoeoi3cbFGB9Rr55PD1Yuzi+5nejOLV00OrC3zT7jWF0KvsvuZfPHiOCFvmn3Go5ir7L7mTnjxMvH0paQv8Hs5pkR+zLqUHlDfkTnHpruUvJ2rOClKaV91maEuUYJtJNkS56cmOTsns5RJ8zUpbfcYAznI3251f/G6n7i7mV/Mo+yy/6O8WW7i7WNGGGKMpG6sMHu2OxB9tcnGcnVsNUyNX33SZuUcRCrHMtnaWnYt80+41q8xV9l9zMuePEOxb5p9xpzFX2X3MZ48Si6wLFxwyaQghQYwMjGSZVG1ej8nMDVWJ56asknrvbRzsfXjzeRO7PHK90ccKAKARuVQwcrVJdFkrUnV5s3CX0M6P3N/I8MBGpU1lnOFAzj5uzEnlW5KkpSVkYlKydzu96N3MV9Hw92AuGZF5nsjr3B1ackEbctiDUc0rtWGfYtpY3XQq8gu47OXR2k5+JbJMZwCTvp2K43GO8eIqs6O1JIsp7G2yuuejV0l8vDiVa4L6PJY6SWVZB5WnYBDk7dxq3NrM1bgRmdrkjpN0UuuHyotxpKyKzKUYsvkkZByowRqG2/OqVaeWK4kwldkvjPQ+e2e2SZ4lNyfi21nSPNHlnT5Iy6+NV5mUWustnTHLvoLeR3cdkQDLKpdCGJQqM6iW07acb7d48Rk6Ms1rEZ1a9yxt+qy+cuFkgJRtDfGts2lWx5nPDCr/AIeXUV5xDd51ZXsckMbNFqmcxpiRiNSxvKdXkbDTG31UdCXUSppkC06G3cl1JaRoGkiOJGDfFrtkEsR3+rJ322rDzMnJxRbOkrnHSjq+vrKMzSojRZ3aJi2nJwNYKggZ2zuK71Gccqjvsaj1uccE6AXt1bG6hWMx+VgMxDtoyDpGkg7ggbjcVeVSMXZkWIPRfovcX/am37P4pVd9bFdm1Y04U5PkHw7qtOajqCkVsgHx3qwFoAoAoAoDuKIty99QCbb2OSFCl2PcASfYBUN22sFieAzDGYCM8sgA+471i/EU/aLZWQ7vhrIcSRsh7sgr7s86yRmpaO5Wxouqu3K8UiPMaJP4DVar80lHvkVahJJSoA6KgGI4h1V8OlleXTKhdi7BJGVdR3JA7sknYbb1NwRm6oOHE5Pbk7bmUk7DA5juAA9gpcGt6O8AgsoRBbppTJY5JZmY8yxO5OwHqAHdUAs6AKAxHXL/AIRN9KL75Ky0OmQz51rdICgCgEblUMHK1SXRZK1J4rzZuns3VXwZ4uGzXCMsc1zkRu/mqq5VCR3+UXb0jFb1CNoX4mCo7uxYdM+E6r7ht6uD8ckMhXcbnUh9QOsf6hVpx86MiIvY0Xn9oW9xfPayKBNask8R7yGjGSvpGtlI8CPZbMnLLwK2aVyk4JwgNx2/u282IRxqTy1tBGWPsT+OqRh+o5Fm/MSG+sThD3HCXZ3SSaBmm1R8tILZHsiPtKilWOaAg7SIHWd0burtLL4PCZQkbh8Mi41CLT57DOdJ5eFVrQlNLKWpySvcmdH+kko4NLcyIGuLQPbhm3JK6ACx596538opmpjN83d6ohxWaxhOrC8kbisGqRzraV3yxwzGKQksORJO+a16Em6hkqJZS+sp2PSjSXYqJZMKSSB/wz8hyFZU3z9itv0zT2RMn9sQW7hLoysVOcN5UKKhB5jcMM9x3rKtuZIo9zZ51P0V40tjIrytHE0oUwPMNTlyEXBBOQzEDRqGT3Hv36coJK+tjFLU9j4bYG1W0topI1iiQo6t57nSApX068k+OawN5rtkmU6GcBNrxHi0KjyXSKSIf5ZDOcD0BtS/6ay1JZox++BB41xfovd2Sx/CoDFq8lctG2SoGfMY45jnWypxk9hBV1YBQBQHcUeo4qAaPgHBjO2M6Y185v5DxY1hq1VBdZaMbl7dcTis/JjQgtkDfdsDmT+NaEnKbvJmWyWhkOJ9IbtnJMjDuAyNgTkYx7N6soxKtst+C9Oifi7xVkjIwW05I25lRsfdVebttjqRfia/oTwcR8QjmjIMRD437mQ6SpPMGsyr5lllqQ4mm6c3cyyQJHK8YYHOliu+QBnHOuzyXTpyhOU4p24q5p4mUk0kyL0avLhb+KJ7iR1YHIZ2I81uYJO+Rn3VsYynRlhZTjBJq27rRjpSkqiTZuZHuctp7EjJwCWBI3xk93dn1mvOG+Ektzk4WHHiXb6xp/36aA5Wa6yCY4SMgeS7ZAJGTuADgZP+9wLSgG7gtpOgAtjbUSBn04oCvVrzIyIMahkZfOjA1YOPOznAx4UBnOuX/CJvpRffJWWh0yGfOtbpAUAUAjcqhgSPmPXVXoCzkgIOwyK4FShKL2LYbUZpky54pcyQpBJLI0SY0xnOldIwuB6ATUPnWrWZN43uP23G7yOJYUmlWNCGVATpUhtYIH0t6J1UrK/cPMY23FLkzi5MsnbD/wBTJ17DTz9W1VtUvms79hN42sQpumF9J2yC4bQ5PaB2PxhwIzq7jlVVceAFbkaTy+c3tMLnt2IjW3SK8tUZIpezSTz1Q7MSCPKGfDNWjRS2Jsh1G9SXB1icRGkG7k08gA3cNtt+6kqbtsbCkr7US14rciJ4RLII5CWdMnSzHGS3iTge6tL9W1rMz3iMWVxLC6yxM6OudLLkEZBBx7CR7arGFSLuk+4luL3jq8QuRP8ACBJIJ8k9pvryRpJz6jiptUvms7kXjax1FfXHb/CO1kWUnJkDEOfHcbnly5VeFOpKV9CrlFKwxxLpReSSq8l1KxictHltkYZAKgbasbZxneu9CEcuhqkC+4rNNMs8srPMuNLscuNJyuk92DvV1FJWQLH8sr8OX+GzaiApbVvpBJAPoBZvearzceAInFOPXNyF7e4eULkrrOQM88e4VKio6IFfVgFAFATLJdiahg1PDr7RDpXkD5R+ce/HornTeeTZmWxEEWXw2/hjfIRmCkDbycEtj9k1in5sXYvTWaSL3pZ1cRxgvbTZVRkh3B0+o/jWFVmnZmz+HUo30PNOJ2/ZsAGz44II5+itmLuac4qOh6nwMMyQojaTEo0kHyh3792axSdtpW9z0i/4Gl9HE7OykL+iAdzjPPwINdTB46VBNxV7mCrRVTU64J0Mjt5lmErsVzgEADcEb+w1mxHKc61N08qVykMMoSzXNMbdTuVFcw2BewX5o8OXsoDpEAGAMCgOqAKAKAxHXL/hE30ovvkrLQ6ZDPnWt0gKAKARuVQwJHzHrqr0B6B0A/xK2+mf4GrRLHpdx0nL8UbhslvHJC3k5xlt4u0ywOQRzHIVAIXRXo6lvxC9mVSYrcaYwPKOXQSMF7yVUhf9dAROsGxi+E2d9IhEEpRZgQQRjyhqHPJQsCPBMUBsbrXLG3wY2k0JQqImHk5webKSuP8AKVHrFAY/hvRdLngCWckiwDtXLFgAFZbmQldiAN9qAkcR4FHbcLsbYOJVju4cOOR+OZu4nkTjn3UBtpnf4Qq9pB2ZXdCD2pO/mnVjHL9E8jQGN4ZZw239o34txrildY4yB5AVVbIxkKGLasj9HGKA44TxIcXtLlLmFFeIZSRQcKSGIxkkggruM7g0BY9X1qLWygLIxe6fUcKTpDKShbHJdKqN+96AzPQLgvwTpDeQY8nsXkj/AOm8sTLj0DJX/TWxN3pIjeaLpijHhl6eJrbBQr9gYixbOk9l+cAxLqxgLt7KpT6ayhlZ0p6ZScNsOHtHFHIJIlDB8jZYkOxHLmeYNWhTzyYbMr1y8HhT4LeRRiJrhSZEAxuFVgSBsG8ognv2q9CTd0wzzStggKAKAn2nmj/ffVWC4eRdWxOkZ5fVXOtsLt3NN0Ft4ZboEkEqpBBOCwZHU6fEjPuJrBWukbOGtt47iz6XcJsbe0nVdStK6nfJ81gDpwPJGCee5rFHa7m07226GAveFwns9GdK+Uc9+3Lbuz9lZoyZgqxilcncMnIcaSRWSSujRPRu2kNvbZYgkOeeB+cODt6MVemrROPypKWaCTtqSujjMt5GutiN+ZPzTzGfRn3VZmjgnKOLjHM7bd/UzWTG51NplhA1HGoHIHgcbf7NVPTnQa42zLB7Fbw2xlvbQHVv8ILAmSEpnfSGzyGe/nnPvoCyoBu4DFfIIVtt2UsOYzsCO7PfQFUttfagTcQ4GnbsjuQFDfpbAkMR4ZHOgKHrl/wib6UX3yVlodMhnzrW6QFAFAI3KoYEj5j11V6A13BOK/BZ0udGvsiW0506vJIxnBxz8K0kruxZmmm64SS0kPDYkmYY7QvqPL9LEaluQ21d1Z+YS1ZjzvgNcE6zp1tmiWICcuZHnLBtbOxZj2enA8kBQMnAArHVpqD2FoyuPydaDyQCOe2WV1dZFkJAXUrBlygG+BtsRWIsSz1pRKzSpw+NLhlwZM884O+EDMOW2e7nQFDddNu04f8AAmiJYyGRpc8y0rSnydPi2OdAP2/TMGygtRD+YlWTXrxqKOZMadO3nYzk0BoJOsuMyCY8OjMqjCuZAXA35N2eQNz7zQFNY9YM8M887xrIkx1SRchsukaTvg6QF32ON6A64t1kq0LW9vZiCJtpNBGWU41BdKgKSDjOCedATOI9Z1w+n4OiwIFxpOJM+HNRgY2xQECXrXAvRd/ARrWF7c/HecpkRwfze2Cjbb+f6K2lRvG1yLlIenhewnsZ7ftVkd3jftMNFqbtFxlTq0OcjcZG3Kr83aSkiLl1b9bCCGGJ+GxymFFRWeQHBVQuoAxHTnSDsapzHWTcyHTDpXPxGYSzaVCgrHGudKA7nc7ljgZPoHKssIKCsiChq4CgCgJdk2xHtqGCdCpORjb0Vo1I5ZFkWlndmBkkHksh1A+rc59gOfRmsUldNFotpposunHGowOy7JkcsWk1IDrzvlWJ5cuVa1OD1udGpWyrLYzvB1lkICRZXBO5xgAEjJ7snbka2adPM7I0a0tiuW3REC7laNU0SIQpTWHzuRkEADAIOcZx7aSTWwxJI9pk4FCY4kdiBGugEEDPLPMeO/trIk9EauIwlOvbNfZwHeFdH7eKQSIzFhnALAjcY5AemjvvMNDk2jRmpxvdcf8AoveyX5o91VOgL2Y8B7qAUKByFALQBQBQGI65f8Im+lF98lZaHTIZ861ukBQBQCNyqGBI+Y9dVegL2cZVgPA/ZWnDpIl6FRGWAxpPuNbjyveYtpP4OhGrII5c/bWDENbC0Cfv6K1zILv6KABmgNp0C6OW1zFcS3BcCLByhxtpZmJGDnzaAkcR6JWk1pJdcPnd+yBLo/gBk4yqsDjffIOKAt06E2CQQySC5JkRWPZq8m5UE5EaHSN++gInBOhFrK1zMTOYY30JGAwlOEVm1grqzlthgHagIlx0ZsTf2sETz4l1dpG6lWQBGI3ZQwJK8iDtvnlkCttOrmGS+vjJK0Vlavgtka2+LWVssRhVUNknHIjHjW1ztopLUixD6UdG+Fmxe7sZ5laP/wBOVJMSDnkB0DAY31+b445i0JzzZZEFn0r6rkThy3Vn2jSrGJHRjq1qUBbQMbMOeO8ZHPFVhWvK0ibFF1odFbewNqINfxqOza21broxjbbzjV6U3JO5DMPWUBQBQHUb4ORUAtbS7K+Up7sb/wA6pKKkSMRzSGYGQa15YzgEMCrAfNJBxmtSdOSLRe09rm4J8IjVbpMMmPOyNWfNI075I/RB5gitOnQtUs9DeqYlc3damQ6x7E2lsscOA0rafJwNKAZPpyeWeW578Y6CvbLBHOtd3ZT9UFiE4lGTu2iT1DyDyqXTyxJN31mqGmtlY4XS2fRllGd66vJTahNrqNqhoyr6Doq8SgCf5s7g76H7xtjGPHfvNbWObeFlfq8UZKl8juenypIGbF1gEkgGMHHozncD+VeYNIRopsDF3g4/5SnORzHh/wCKAm8NDaCGl7Qg4zp042GxHj6fTQEugGrqNmRgraGIwGxnB8cd9AVycOuNYY3jEagdHZppIHnA9+/iCMemgM91y/4RN9KL75Ky0OmQz51rdICgCgEblUMCR8x66q9AaAnG9aJZuw0L5PT7qGHn4j0E4bl3VBeE1LQdoXFoBKA33VtxC3SC7innSLtQFBZgDgq6kjPPGaAkycSseH2U8FrObiacFcjBAyunJIGAACTjcknw5AaKHj9uba3VOJxwMsahh8WxJ0KMEPnGCDQFNwW/gWe6I4qUlaQEOVj7KRQg3wRoJzkeSVPkj2gT+LdJ7RruxHbxu0Ts0kwwEUGF155IGpiNgTjFAZ636X2LXfE7K5kAtrp8rOpyuTAkbgsM6fMGG5ZBz3Z2ckssZLVEE/pH0rs4OFTWgvo7p3t2t4hEASAYjGuvSxAwNyxIz3DuqsacnK9rAb4v1jQ2zcOMM6TRBGjuY0YMVBWLSSBydSGIHeAw79pjRbvddguZvrq43bXUlqbaeOUKkgbQwbTkx4zjlnB91XoRcU7oM82rOQFAFAFAdRuRuKgEpLsd4xSwJa8VcDAmcAchrbA7thmosCNJdjnuT/vvNLAs+hvHxbX0Mz/mwSr47ldSpPpxkH2VE43jYXPfL3gtreLHJIokAGUZXYAq2DsUIyNhWGjiatC6g7X7DLGbjoOcK6J2kEgliiIdc4Jd2xkYOzNjkTVquOr1Y5JPZ2ImVWUlZl+BWoYxcUAUAUAUAUB5Z15dIo1thYqwMsjK7gHzEQ6hq8CzBcDwBrYoRd8xDPEa2iAoAoBG5VDAkfMeuqvQF7N5reo/ZWiJ9FlYmO//AH6qGirE3hf6Xs/nRmfD7x0W6+Le+oNk6MK45t7zQAYFJ76AejTAxv7aA6oDmRARg59hI+ygGPgCeB5Y5nuGBQEhFwAPDbegM/P5zfSP210I9FFTirAKAKAKAKAKAKAKAKAKAKAKAn8O41cwDEFzNEPmpI6r69IOM+nFVcU9UCZ+WHEP165/ev8AjUZI8AH5YcQ/Xrn96/40yR4APyw4h+vXP71/xpkjwAflhxD9euf3r/jTJHgA/LDiH69c/vX/ABpkjwAflhxD9euf3r/jTJHgBH6W35GDfXOD/wDmcfWDmmSPAFMzEkkkkk5JJySTzJJ5mrgSgCgCgEblUMCR8x66q9AaDGdq0SWrjQsk8D7zQx8zAehhC8hzqC0YKOg7QuFAFAFAFAFAFAFAZ6fzm+kftroR6KKnFWAUAUAUAUB//9k=' }} // Replace with actual image URL
              style={styles.courseImage}
            />
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sCpEpJoLQHoqlPbukYNWmGfrSMOa0OG0Gg&s' }} // Replace with actual image URL
              style={styles.courseImage}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 8,
  },
  menuContainerWrapper: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 50, 
    position: 'relative',
    alignItems: 'center'
  },
  profileContainer: {
      position: 'absolute',
      marginTop: -50,
      zIndex: 1
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  menuContainer: {
    height: height*0.5,
    width: width*0.95,
    paddingHorizontal: 15,
    paddingVertical: 80,
    borderRadius: 25,
    backgroundColor: '#F2E1F3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 20,
    right: 20,
    backgroundColor: '#E07CD6',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editText: {
    fontSize: 18,
    color: '#d63384',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  },
  tagLine: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    alignSelf: 'center'
  },
  aboutMe: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillPill: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  skillText: {
    fontSize: 16,
    color: 'black',
  },
  coursesContainer: {
    marginTop: 20,
  },
  coursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  coursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#8D8989',
  },
  courseImage: {
    width: width*0.4,
    height: 170,
    borderRadius: 10,
    marginRight: 25,
    resizeMode: 'cover'

  },
});

export default ProfileScreen;
